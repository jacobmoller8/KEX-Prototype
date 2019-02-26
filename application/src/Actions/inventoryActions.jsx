import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_INV_ITEM = 'REMOVE_INV_ITEM';
export const EDIT_INV_ITEM = 'EDIT_INV_ITEM';
export const ADD_INV_ITEM = 'ADD_INV_ITEM';

/* ------------- ACTION CREATORS ------------- */
export default function removeItem(user, item) {
	const EANcode = item.EANcode
	console.log(EANcode)
	//remove item
	databaseRef.ref('users/' + user + '/inventory').child(EANcode).remove();

	// add to trash
	databaseRef.ref('users/' + user + '/trash').child(EANcode).set(item)


	return dispatch => {

		//get new copy of inventory
		var firebaseCall = databaseRef.ref("users/" + user)

		firebaseCall.once('value', snapshot => {
			console.log("Reached")
			snapshot.forEach(childSnap => {
				var item = childSnap.val();
				console.log("ITEM: " + childSnap.val())
				if (item === "inventory") {
					dispatch({
						type: REMOVE_INV_ITEM,
						payload: {
							inventory: item
						}
					})
				}
			})
		});
	}
}


export const editItem = (item) => ({
	type: EDIT_INV_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});

export const addItem = () => ({
	type: ADD_INV_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});