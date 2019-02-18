

# https://github.com/thisbejim/Pyrebase
# python3 -m pip install pyrebase
# python3 script.py

import pyrebase
import json

config = {
    "apiKey": "AIzaSyD2_kZtwpnT5SMqLKReKuAAkmRpEXJl71k",
    "authDomain": "kex-scanner-project.firebaseapp.com",
    "databaseURL": "https://kex-scanner-project.firebaseio.com",
    "storageBucket": "kex-scanner-project.appspot.com",
    "serviceAccount": "key-firebase.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()


inventory = []


def firebase():

    json_inv = json.dumps(inventory)

    data = {
        "name": "Jacob",
        "username": "jacobmoller",
        "password": "test123",
        "inventory": json_inv,
    }
    db.child("users").child("user1").set(data)
    return


def barcode_scanner_output():

    x = int(input("barcode OUT: "))
    if x == 0:
        exit()
    if x == 1:
        barcode_scanner_input()
    if x == 2:
        print("already in output")
        barcode_scanner_output()
    else:
        try:
            inventory.remove(x)
            print("item removed")
            print(inventory)
            firebase()
            barcode_scanner_output()
        except:
            print("not in inventory")
            barcode_scanner_output()


def barcode_scanner_input():

    x = int(input("barcode IN: "))
    if x == 0:
        exit()
    if x == 1:
        print("already in input")
        barcode_scanner_input()
    if x == 2:
        barcode_scanner_output()
    else:
        inventory.append(x)
        print("item added")
        print(inventory)
        firebase()
        barcode_scanner_input()


barcode_scanner_input()
