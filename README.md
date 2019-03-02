# KEX-Prototype

Jacob Möller & Hugo Bergqvist


## Todo

### Database
- Remove unused Users (DONE)
- Update the users we are going to use (DONE)

### Application
- Implement Redux (DONE) 
- Login and connection to database (DONE) 
- Handle Session/LocalStorage/Cookie (Part of redux?) (<-- PRIO )
- API Implemention to Add Item

- Components:
	- Inventory
			Load inventory on first mount of component
			Feedback on addToList ( SNACKBAR )

	- Trash
			Feedback on addToList ( SNACKBAR )

	- Shopping
			Empty List?
			If time: save checkbox state

	- Add Item
			Feedback on add item ( SNACKBAR )
			API-Implementation

	- Edit Item
			Prepare for API-data

	- Log In
			Button spinner (DONE)
			Empty redux state on wrong password /w feedback (DONE)

- Redux setup:
	- Actions:
		- Add to Shopping (DONE)
		- Remove from Shopping (DONE)

		- Add to Inventory (DONE-ISH)
		- Remove from Inventory (DONE)

		- Move to Trash (DONE)
		- Restore from trash (DONE)

### Script
- Error-handling
- API Implementation

### Scanner - Prototype
- Print barcodes for check in / check out
- Label raspberries


