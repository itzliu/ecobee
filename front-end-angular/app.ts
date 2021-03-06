// Generated by https://quicktype.io

export interface App {
    api_key: string;
    data: ThermostatData;
}

export interface ThermostatData {
    alerts: any[];
    brand: string;
    events: any[];
    features: string;
    identifier: string;
    isRegistered: boolean;
    lastModified: string;
    modelNumber: string;
    name: string;
    program: Program;
    remoteSensors: RemoteSensor[];
    runtime: Runtime;
    settings: Settings;
    thermostatRev: string;
    thermostatTime: string;
    utcTime: string;
}

export interface Program {
    climates: Climate[];
    currentClimateRef: CurrentClimateRef;
    schedule: Array<CurrentClimateRef[]>;
}

export interface Climate {
    climateRef: string;
    colour: number;
    coolFan: string;
    coolTemp: number;
    heatFan: string;
    heatTemp: number;
    isOccupied: boolean;
    isOptimized: boolean;
    name: string;
    owner: string;
    sensors: Sensor[];
    type: string;
    vent: string;
    ventilatorMinOnTime: number;
}

export interface Sensor {
    id: string;
    name: string;
}

export enum CurrentClimateRef {
    Home = "home",
    Sleep = "sleep",
}

export interface RemoteSensor {
    capability: Capability[];
    code?: string;
    id: string;
    inUse: boolean;
    name: string;
    type: string;
}

export interface Capability {
    id: string;
    type: Type;
    value: string;
}

export enum Type {
    Humidity = "humidity",
    Occupancy = "occupancy",
    Temperature = "temperature",
}

export interface Runtime {
    actualHumidity: number;
    actualTemperature: number;
    connectDateTime: string;
    connected: boolean;
    desiredCool: number;
    desiredCoolRange: number[];
    desiredDehumidity: number;
    desiredFanMode: string;
    desiredHeat: number;
    desiredHeatRange: number[];
    desiredHumidity: number;
    disconnectDateTime: string;
    firstConnected: string;
    lastModified: string;
    lastStatusModified: string;
    rawTemperature: number;
    runtimeDate: string;
    runtimeInterval: number;
    runtimeRev: string;
    showIconMode: number;
}

export interface Settings {
    autoAway: boolean;
    autoHeatCoolFeatureEnabled: boolean;
    auxMaxOutdoorTemp: number;
    auxOutdoorTempAlert: number;
    auxOutdoorTempAlertNotify: boolean;
    auxOutdoorTempAlertNotifyTechnician: boolean;
    auxRuntimeAlert: number;
    auxRuntimeAlertNotify: boolean;
    auxRuntimeAlertNotifyTechnician: boolean;
    backlightOffDuringSleep: boolean;
    backlightOffTime: number;
    backlightOnIntensity: number;
    backlightSleepIntensity: number;
    coldTempAlert: number;
    coldTempAlertEnabled: boolean;
    compressorProtectionMinTemp: number;
    compressorProtectionMinTime: number;
    condensationAvoid: boolean;
    coolMaxTemp: number;
    coolMinTemp: number;
    coolRangeHigh: number;
    coolRangeLow: number;
    coolStages: number;
    coolingLockout: boolean;
    dehumidifierLevel: number;
    dehumidifierMode: string;
    dehumidifyOvercoolOffset: number;
    dehumidifyWhenHeating: boolean;
    dehumidifyWithAC: boolean;
    disableAlertsOnIdt: boolean;
    disableHeatPumpAlerts: boolean;
    disablePreCooling: boolean;
    disablePreHeating: boolean;
    drAccept: string;
    eiLocation: string;
    electricityBillCycleMonths: number;
    electricityBillStartMonth: number;
    electricityBillingDayOfMonth: number;
    enableElectricityBillAlert: boolean;
    enableProjectedElectricityBillAlert: boolean;
    fanControlRequired: boolean;
    fanMinOnTime: number;
    followMeComfort: boolean;
    groupName: string;
    groupRef: string;
    groupSetting: number;
    hasBoiler: boolean;
    hasDehumidifier: boolean;
    hasElectric: boolean;
    hasErv: boolean;
    hasForcedAir: boolean;
    hasHeatPump: boolean;
    hasHrv: boolean;
    hasHumidifier: boolean;
    hasUVFilter: boolean;
    heatCoolMinDelta: number;
    heatMaxTemp: number;
    heatMinTemp: number;
    heatPumpGroundWater: boolean;
    heatPumpReversalOnCool: boolean;
    heatRangeHigh: number;
    heatRangeLow: number;
    heatStages: number;
    holdAction: string;
    hotTempAlert: number;
    hotTempAlertEnabled: boolean;
    humidifierMode: string;
    humidity: string;
    humidityAlertNotify: boolean;
    humidityAlertNotifyTechnician: boolean;
    humidityHighAlert: number;
    humidityLowAlert: number;
    hvacMode: string;
    installerCodeRequired: boolean;
    isRentalProperty: boolean;
    isVentilatorTimerOn: boolean;
    lastServiceDate: string;
    locale: string;
    maxSetBack: number;
    maxSetForward: number;
    monthlyElectricityBillLimit: number;
    monthsBetweenService: number;
    quickSaveSetBack: number;
    quickSaveSetForward: number;
    randomStartDelayCool: number;
    randomStartDelayHeat: number;
    remindMeDate: string;
    serviceRemindMe: boolean;
    serviceRemindTechnician: boolean;
    smartCirculation: boolean;
    soundAlertVolume: number;
    soundTickVolume: number;
    stage1CoolingDifferentialTemp: number;
    stage1CoolingDissipationTime: number;
    stage1HeatingDifferentialTemp: number;
    stage1HeatingDissipationTime: number;
    tempAlertNotify: boolean;
    tempAlertNotifyTechnician: boolean;
    tempCorrection: number;
    useCelsius: boolean;
    useTimeFormat12: boolean;
    useZoneController: boolean;
    userAccessCode: string;
    userAccessSetting: number;
    vent: string;
    ventilatorDehumidify: boolean;
    ventilatorFreeCooling: boolean;
    ventilatorMinOnTime: number;
    ventilatorMinOnTimeAway: number;
    ventilatorMinOnTimeHome: number;
    ventilatorOffDateTime: string;
    ventilatorType: string;
    wifiOfflineAlert: boolean;
}
