import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_SHOP_ITEM = 'REMOVE_SHOP_ITEM';
export const EMPTY_SHOP = 'EMPTY_SHOP';


/* ------------ ACTION CREATORS --------- */
export function removeShoppingItem(user, item) {
	const EANcode = item.EANcode

	//remove item
	databaseRef.ref('users/' + user + '/shopping').child(EANcode).remove();

	return dispatch => {

		//get new copy of inventory
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				if (item === "shopping") {
					dispatch({
						type: REMOVE_SHOP_ITEM,
						payload: {
							shopping: item
						}
					})
				}
			})
		});
	}
}


// NOT YET ACTIVATED FUNCTION //

export function emptyShoppingList(user){
	const emptyShopping = {shopping: {}}

	// delete old shoppinglist 
	databaseRef.ref('users/' + user).child('shopping').remove();

	// add new shoppinglist
	databaseRef.ref('users/' + user).set(emptyShopping)

	return dispatch => {

		//get new copy of shopping
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				if (item === "shopping") {
					dispatch({
						type: EMPTY_SHOP,
						payload: {
							shopping: item
						}
					})
				}
			})
		});
	}
}