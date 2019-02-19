

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

username = "Red"
password = "Cobra28"

firebase = pyrebase.initialize_app(config)
db = firebase.database()

inventory = []

json_inv = json.dumps(inventory)


json_inv = json.dumps(inventory)
data = {
    "username": username,
    "password": password,
    "inventory": json_inv,
    "trash": json_inv,
    "shopping": json_inv,
    "errors": json_inv
}
db.child("users").child(username).set(data)


def get_from_firebase():

    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db_inv = db.child("users").child(username).child("inventory").get()
    inventory = json.loads(db_inv.val())

    barcode_scanner_input()


def send_to_firebase():

    json_inv = json.dumps(inventory)
    data = {"inventory": json_inv}
    db.child("users").child(username).update(data)
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
        try:
            inventory.remove(x)
            print("item removed")
            print(inventory)
            send_to_firebase()
            barcode_scanner_output()
        except:
            print("not in inventory")
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
        inventory.append(x)
        print("item added")
        print(inventory)
        send_to_firebase()
        barcode_scanner_input()


# get_from_firebase()
