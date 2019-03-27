# ecobee
Web app to interact with ecobee API.

## What I Learned
* How to create web APIs
* How to use and implement mySQL in an API project
* How to use UPDATE and DELETE requests.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* Python3.6
* mySQL

### Installing
A step by step series of examples that tell you how to get a development environment running.

Clone the repository onto your machine.
```
git clone https://github.com/itzliu/ecobee.git
```
Change directory into the project directory folder.
```
cd ecobee
```
Create a virtual environment for the app.
```
virtualenv -p python3.6 env
```
Activate your virtual environment.
```
source env/bin/activate
```
Install the Pyhon dependencies.
```
pip install -r requirements.txt
```
Run the application.
```
python run.py

## Running Tests
N/a

## Built With
* Flask - micro framework
* mySQL - SQL database

## Authors
* **Harry Liu**

## Acknowledgements
* Built based on [this Python Ecobee API](https://github.com/nkgilley/python-ecobee-api) from GitHub by [nkgilley](https://github.com/nkgilley/python-ecobee-api/commits?author=nkgilley).
