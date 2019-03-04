# https://github.com/thisbejim/Pyrebase
# python3 -m pip install pyrebase
# pip install datetime
# python3 script.py

import pyrebase
import json
import requests
from datetime import date

# FIREBASE CONFIG
config = {
    "apiKey": "AIzaSyD2_kZtwpnT5SMqLKReKuAAkmRpEXJl71k",
    "authDomain": "kex-scanner-project.firebaseapp.com",
    "databaseURL": "https://kex-scanner-project.firebaseio.com",
    "storageBucket": "kex-scanner-project.appspot.com",
    "serviceAccount": "key-firebase.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

# API CONFIG
payload = {"grant_type": "client_credentials",
           "client_secret": "q1tnWxDWObB0KhWO4MZnUc8Abe6MkmUk53UAqMjK",
           "client_id": "2"}

access_token = requests.post(
    "https://consupedia.se/oauth/token", json=payload).json()["access_token"]

# USER CONFIG
username = "Red"
password = "Cobra28"


def add_user():

    db.child("users").child(username).child("username").set(username)
    db.child("users").child(username).child("password").set(password)


def add_to_inventory(code):

    try:
        quant = int(db.child("users").child(username).child(
            "inventory").child(code).child("quantity").get().val())

        dates = db.child("users").child(username).child(
            "inventory").child(code).child("dates").get().val()
    except:
        quant = 0
        dates = []

    today = str(date.today())

    dates.append(today)

    try:
        api_headers = {
            "Accept": "application/json",
            "Authorization": access_token}
        api_string = "https://consupedia.se/api/students/products/" + str(code)
        api_response = requests.get(api_string, headers=api_headers)
        json_data = json.loads(api_response.text)
        name = json_data["name"]
    except:
        name = "Okänd Kod"

    print(json_data)

    product = {
        "EANcode": code,
        "name": name,
        "dates": dates,
        "comment": "",
        "quantity": quant + 1
    }

    db.child("users").child(username).child(
        "inventory").child(code).set(product)

    return


def remove_from_inventory(code):

    try:
        quant = int(db.child("users").child(username).child(
            "inventory").child(code).child("quantity").get().val())

        dates = db.child("users").child(username).child(
            "inventory").child(code).child("dates").get().val()
    except:
        quant = 0
        dates = []

    if quant == 1:
        try:
            db.child("users").child(username).child(
                "inventory").child(code).remove()

            add_to_trash(code)
        except:
            print("not in inventory")
    else:
        try:
            dates.pop(0)

            product = {
                "EANcode": code,
                "name": "",
                "dates": dates,
                "comment": "",
                "quantity": quant - 1
            }
            db.child("users").child(username).child(
                "inventory").child(code).set(product)

            add_to_trash(code)

        except:
            print("not in inventory")

    return


def add_to_trash(code):

    try:
        quant = int(db.child("users").child(username).child(
            "trash").child(code).child("quantity").get().val())

        dates = db.child("users").child(username).child(
            "trash").child(code).child("dates").get().val()
    except:
        quant = 0
        dates = []

    today = str(date.today())

    dates.append(today)
    print(dates)

    product = {
        "EANcode": code,
        "name": "",
        "dates": dates,
        "comment": "",
        "quantity": quant + 1
    }

    db.child("users").child(username).child(
        "trash").child(code).set(product)

    return


def barcode_scanner_output():

    try:
        x = int(input("barcode OUT: "))
    except:
        print("error input code")
        barcode_scanner_output()

    if x == 0:
        exit()
    if x == 1:
        barcode_scanner_input()
    if x == 2 or x == "":
        print("already in output")
        barcode_scanner_output()
    else:
        remove_from_inventory(x)
        print("item removed")
        barcode_scanner_output()


def barcode_scanner_input():

    try:
        x = int(input("barcode IN: "))
    except:
        print("error input code")
        barcode_scanner_input()

    if x == 0:
        exit()
    if x == 1 or x == "":
        print("already in input")
        barcode_scanner_input()
    if x == 2:
        barcode_scanner_output()
    else:
        add_to_inventory(x)
        print("item added")
        barcode_scanner_input()


# add_user()
barcode_scanner_input()
