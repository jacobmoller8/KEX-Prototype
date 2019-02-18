

# https://github.com/thisbejim/Pyrebase

import pyrebase

config = {
  "apiKey": "AIzaSyD2_kZtwpnT5SMqLKReKuAAkmRpEXJl71k",
  "authDomain": "kex-scanner-project.firebaseapp.com",
  "databaseURL": "https://kex-scanner-project.firebaseio.com",
  "storageBucket": "kex-scanner-project.appspot.com",
  "serviceAccount": "kex-scanner-project-firebase-adminsdk-28leq-7bc77b9929"
}

firebase = pyrebase.initialize_app(config)




inventory = []


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
        barcode_scanner_input()


barcode_scanner_input()
