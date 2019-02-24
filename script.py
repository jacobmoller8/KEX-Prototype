# https://github.com/thisbejim/Pyrebase
# python3 -m pip install pyrebase
# pip install datetime
# python3 script.py

import pyrebase
import json
from datetime import date

config = {
    "apiKey": "AIzaSyD2_kZtwpnT5SMqLKReKuAAkmRpEXJl71k",
    "authDomain": "kex-scanner-project.firebaseapp.com",
    "databaseURL": "https://kex-scanner-project.firebaseio.com",
    "storageBucket": "kex-scanner-project.appspot.com",
    "serviceAccount": "key-firebase.json"
}

username = "Red"
password = "Cobra28"

firebase = pyrebase.initialize_app(config)
db = firebase.database()


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
    print(dates)

    product = {
        "EANcode": code,
        "name": "",
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
        except:
            print("not in inventory")
    else:
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

    return


def barcode_scanner_output():

    x = int(input("barcode OUT: "))

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

    x = int(input("barcode IN: "))
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
# get_from_firebase()
