from flask import Blueprint, jsonify, request
from flask_cors import cross_origin
from flaskApp.apps.utils import (
    createApp,
    deleteApp,
    getUserApps,
    getAppByKey,
    getThermostats,
    getUserThermostats,
    getThermostat,
)
from flask_login import login_required

from ecobeeApp import ecobeeApp

apps_blueprint = Blueprint("apps_blueprint", __name__)


from flaskApp import db
from flaskApp.config import ecobeeAppLogger
from flaskApp.models import App

# Register


@apps_blueprint.route("/apps/authorize/<string:api_key>", methods=["GET"])
@cross_origin(supports_credentials=True)
@login_required
def _authorizeApp(api_key):
    try:
        pin, authorization_code = ecobeeApp.requestPinAndAuthorizationCode(api_key)
    except:
        success = False
        data = None
    else:
        success = True
        data = {"pin": pin, "authorization_code": authorization_code}
    r = {"success": success, "data": data}
    return jsonify(r)
    


@apps_blueprint.route("/apps/create", methods=["POST"])
@cross_origin(supports_credentials=True)
@login_required
def _createApp():
    try:
        createApp()
    except Exception as e:
        print(e)
        success = False
    else:
        success = True
    return jsonify({"success": success})

@apps_blueprint.route("/apps/updateAppCredentials", methods=["POST"])
@cross_origin(supports_credentials=True)
@login_required
def _updateAppCredentials():    
    data = request.get_json()
    api_key = data['api_key']
    authorization_code = data['authorization_code']
    try:
        access_token, refresh_token = ecobeeApp.requestTokens(api_key, authorization_code)
    except:
        success = False
    else:
        app = App.query.filter_by(api_key=api_key).first()
        app.authorization_code=authorization_code
        app.access_token=access_token
        app.refresh_token=refresh_token
        db.session.commit()
        success = True
    return jsonify({"success": success})


@apps_blueprint.route("/apps/delete/<string:api_key>", methods=["DELETE"])
@cross_origin(supports_credentials=True)
def _deleteApp(api_key):
    try:
        deleteApp(api_key)
    except:
        success = False
    else:
        success = True
    return jsonify({"success": success})


@apps_blueprint.route("/apps", methods=["GET"])
@cross_origin(supports_credentials=True)
@login_required
def _getUserApps():
    apps = getUserApps()
    apps = [{"name": app.name, "key": app.api_key} for app in apps]
    return jsonify(apps)


@apps_blueprint.route("/getUserThermostats")
@cross_origin(supports_credentials=True)
@login_required
def _getUserThermostats():
    data = getUserThermostats()
    return jsonify(data)

@apps_blueprint.route("/thermostat/<identifier>")
@cross_origin(supports_credentials=True)
@login_required
def _getThermostatByIdentifier(identifier):
    thermostats = getUserThermostats()
    thermostat = next(
        (
            thermostat
            for thermostat in thermostats
            if thermostat["identifier"] == identifier
        ),
        None,
    )
    if thermostat:
        return jsonify(thermostat)
    else:
        return jsonify({"success": False})


# Front-end actions

import json


@apps_blueprint.route("/setHvacMode", methods=["POST"])
@cross_origin(supports_credentials=True)
def setHvacMode():
    data = json.loads(request.data.decode())
    key = data["key"]
    identifier = data["identifier"]
    mode = data["mode"]
    app = getAppByKey(key)
    r = app.set_hvac_mode(identifier=identifier, hvac_mode=mode)
    message = f"HVAC mode set to {mode}."
    return jsonify({"success": r, "message": message})


@apps_blueprint.route("/resume", methods=["POST"])
@cross_origin(supports_credentials=True)
def resume():
    data = json.loads(request.data.decode())
    key = data["key"]
    identifier = data["identifier"]
    app = getAppByKey(key)
    r = app.resume(identifier=identifier)
    message = f"Regular program resumed."
    return jsonify({"success": r, "message": message})


@apps_blueprint.route("/setClimate", methods=["POST"])
@cross_origin(supports_credentials=True)
def setClimate():
    data = json.loads(request.data.decode())
    key = data["key"]
    identifier = data["identifier"]
    climate = data["climate"]
    app = getAppByKey(key)
    r = app.set_climate_hold(identifier=identifier, climate=climate)
    message = f"Climate set to {climate}."
    return jsonify({"success": r, "message": message})


@apps_blueprint.route("/setTemperature", methods=["POST"])
@cross_origin(supports_credentials=True)
def setTemperatureHold():
    data = json.loads(request.data.decode())
    key = data["key"]
    identifier = data["identifier"]
    temperature = data["temperature"]
    app = getAppByKey(key)
    r = app.set_temperature_hold(identifier=identifier, temperature=float(temperature))
    message = f"Temperature set to {temperature}C."
    return jsonify({"success": r, "message": message})


@apps_blueprint.route("/sendMessage", methods=["POST"])
@cross_origin(supports_credentials=True)
def sendMessage():
    data = json.loads(request.data.decode())
    key = data["key"]
    identifier = data["identifier"]
    message = data["message"]
    app = getAppByKey(key)
    r = app.send_message(identifier=identifier, message=message)
    message = f"Message sent."
    return jsonify({"success": r, "message": message})

# Testing

@apps_blueprint.route("/runtimeReport", methods=["GET"])
@cross_origin(supports_credentials=True)
@login_required
def runtimeReport():
    appConfig = App.query.first()
    app = ecobeeApp(config=appConfig, db=db, logger=ecobeeAppLogger)
    data = app.getRuntimeReport()
    return jsonify(data)


@apps_blueprint.route("/data", methods=["GET"])
def data():
    appConfig = App.query.first()
    app = ecobeeApp(config=appConfig, db=db, logger=ecobeeAppLogger)
    data = app.requestData()
    data = data["thermostatList"][0]
    return jsonify(data)