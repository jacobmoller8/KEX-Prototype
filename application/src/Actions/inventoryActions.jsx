import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

/* ------------- ACTION CREATORS ------------- */
export default function removeItem(user, item) {

	//remove item
	databaseRef.ref('users/' + user + '/inventory').child(item).remove();
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
						type: REMOVE_ITEM,
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
	type: EDIT_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});

export const addItem = () => ({
	type: ADD_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});