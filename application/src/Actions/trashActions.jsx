import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_TRASH_ITEM = 'REMOVE_TRASH_ITEM';
export const ADD_TRASH_TO_SHOP = 'ADD_TRASH_TO_SHOP';


/* ------------- ACTION CREATORS ------------- */
export  function removeTrashItem(user, item) {
	const EANcode = item.EANcode

	//remove item
	databaseRef.ref('users/' + user + '/trash').child(EANcode).remove();

	return dispatch => {

		//get new copy of trash
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				if (item === "trash") {
					dispatch({
						type: REMOVE_TRASH_ITEM,
						payload: {
							trash: item
						}
					})
				}
			})
		});
	}
}

export function addTrashToShopping(user, item) {
	const EANcode = item.EANcode

	// add to shopping
	databaseRef.ref('users/' + user + '/shopping').child(EANcode).set(item)

	return dispatch => {

		//get new copy of inventory
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				if (item === "shopping") {
					dispatch({
						type: ADD_TRASH_TO_SHOP,
						payload: {
							shopping: item
						}
					})
				}
			})
		});
	}
}