import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const REMOVE_TRASH_ITEM = 'REMOVE_TRASH_ITEM';


/* ------------- ACTION CREATORS ------------- */
export default function removeTrashItem(user, item) {
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