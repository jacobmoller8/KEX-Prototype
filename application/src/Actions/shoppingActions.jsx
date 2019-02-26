import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_SHOP_ITEM = 'REMOVE_SHOP_ITEM';


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