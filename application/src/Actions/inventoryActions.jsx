import { databaseRef } from "../Firebase/firebase";
import store from "../Store/store"

/* ------------- ACTIONS ------------- */
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

/* ---------------- VARIABLES ----------------- */

let currentUser = databaseRef.ref('users/' + store.getState().user.username)

/* ------------- ACTION CREATORS ------------- */
export default function removeItem(item) {

	databaseRef.ref('users/'+currentUser+'/inventory').child(item).remove();

	return ({
		type: REMOVE_ITEM,
		payload: databaseRef.ref('users/'+currentUser+'/inventory')
	})
};

export const editItem = (item) => ({
	type: EDIT_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});

export const addItem = () => ({
	type: ADD_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});