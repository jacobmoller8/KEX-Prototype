# KEX-Prototype & DH2642 Project

Jacob Möller & Hugo Bergqvist

## About the project

The project is a webapplication for a digital food inventory system. The application consist of three main parts: shopping/inventory/trash and we are doing the project as part of our bachelor degree project. The webapp is connected to a physical scanner that can read barcodes, which is the main use for the app (there is a link to a demonstration video of the scanner-system in the header of the app). The webapplication is written with the framework React.

## Run Instructions

To run the code use the following website:
- https://kex-scanner-project.firebaseapp.com/

To login to the page:
- Username: midreview
- Password: password

Or create your own account with the register button (keep in mind all the lists will be empty if you do this).

## API 

The API we are using is from consupedia.com (not open to the public) and is accessable in the app by adding an item with a barcode of a food item. You can try it by going in to Consupedias website, write an food item and copy the barcode and paste it into the barcode field in our application.

## Database

We are using Firebase realtime database to store all inventory and user data. We are also using Firebase to host our website and we have some cloudfunctions that logs all the inventory changes to the database.

## File Structure

Redux Folders (saving states over multiple pages):
- Actions
- Reducers
- Store

Component structure:
- Container
- Presentation
- MaterialComponents

Script:
- Script.py 

Script that takes scanner input, get the barcode from the API and sends it to the database to the specifik user.

