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
        itemObject = db.child("users").child(username).child(
            "inventory").child(code).get().val()

        name = itemObject["name"]
        comment = itemObject["comment"]
        quant = int(itemObject["quantity"])
        dates = itemObject["dates"]
        try:
            fullname = itemObject["fullname"]
        except:
            fullname = ""

    except:
        quant = 0
        dates = []
        fullname = ""
        comment = ""
        try:
            api_headers = {
                "Accept": "application/json",
                "Authorization": access_token}
            api_string = "https://consupedia.se/api/students/products/" + \
                str(code)
            api_response = requests.get(api_string, headers=api_headers)
            json_data = json.loads(api_response.text)
            name = json_data["name"]
            fullname = json_data["fullname"]
            print(json_data)
        except:
            name = "Okänd Kod"

    today = str(date.today())

    dates.append(today)

    product = {
        "EANcode": code,
        "name": name,
        "fullname": fullname,
        "dates": dates,
        "comment": comment,
        "quantity": quant + 1
    }

    db.child("users").child(username).child(
        "inventory").child(code).update(product)

    print("item added to inventory")

    return


def remove_from_inventory(code):

    try:
        itemObject = db.child("users").child(username).child(
            "inventory").child(code).get().val()

        quant = int(itemObject["quantity"])
        dates = itemObject["dates"]

    except:
        quant = 0
        dates = []

    if quant == 1:
        try:
            add_to_trash(code)

            db.child("users").child(username).child(
                "inventory").child(code).remove()

            print("item removed from inventory")

        except:
            print("not in inventory: error 1")
    else:
        try:
            add_to_trash(code)
            dates.pop(0)

            product = {
                "EANcode": code,
                "dates": dates,
                "quantity": quant - 1
            }
            db.child("users").child(username).child(
                "inventory").child(code).update(product)

            print("item removed from inventory")

        except:
            print("not in inventory: error 2")

    return


def add_to_trash(code):

    try:
        itemObject = db.child("users").child(username).child(
            "trash").child(code).get().val()

        name = itemObject["name"]
        comment = itemObject["comment"]
        quant = int(itemObject["quantity"])
        dates = itemObject["dates"]
        try:
            fullname = itemObject["fullname"]
        except:
            fullname = ""

    except:
        quant = 0
        dates = []
        try:
            itemObject = db.child("users").child(username).child(
                "inventory").child(code).get().val()
            name = itemObject["name"]
            fullname = itemObject["fullname"]
            comment = itemObject["comment"]
        except:
            print("error adding to trash")

    today = str(date.today())
    dates.append(today)

    product = {
        "EANcode": code,
        "fullname": fullname,
        "name": name,
        "dates": dates,
        "comment": comment,
        "quantity": quant + 1
    }

    db.child("users").child(username).child(
        "trash").child(code).set(product)

    print("item added to trash")

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
        barcode_scanner_input()


# add_user()
barcode_scanner_input()
