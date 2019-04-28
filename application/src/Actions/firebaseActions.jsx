import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_FIREBASE_DATA = "UPDATE_FIREBASE_DATA";
export const TRY_REGISTER_NEW_USER = "TRY_REGISTER_NEW_USER";
export const UPDATE_SORTED_INVENTORY = "UPDATE_SORTED_INVENTORY";
export const UPDATE_SORTED_TRASH = "UPDATE_SORTED_TRASH";
export const UPDATE_SORTED_SHOPPING = "UPDATE_SORTED_SHOPPING";

/* ------------- ACTION CREATORS ------------- */
export function updateFirebaseData(username) {

	var firebaseCall = databaseRef.ref("users/" + username)
    return dispatch => {

        firebaseCall.on('value', snapshot => {
            var userObject = snapshot.val()
            dispatch({
                type: UPDATE_FIREBASE_DATA,
                payload: {
                    user: userObject
                }
            })
        });
    }
}

export function tryRegisterNewUser(username) {
    return dispatch => {
        var firebaseCall = databaseRef.ref("users/" + username)

        firebaseCall.once("value", snapshot => {
            var userObject = snapshot.val()

            dispatch({
                type: TRY_REGISTER_NEW_USER,
                payload: {
                    user: userObject
                }
            })
        })

    }
}

export function addUser(user, pass) {

    databaseRef.ref('users/' + user).set({
        username: user,
        password: pass,
    });

    return dispatch => {
        dispatch({
            type: ADD_USER,
            payload: {
                user: user
            }
        })
    }
}

export const updateSortedTrash = (list) => ({
	type: UPDATE_SORTED_TRASH,
	payload: list
})

export const updateSortedInventory = (list) => ({
	type: UPDATE_SORTED_INVENTORY,
	payload: list
})

export const updateSortedShopping = (list) => ({
	type: UPDATE_SORTED_SHOPPING,
	payload: list
})

// Not used
export function removeUser() {

    return {
        type: REMOVE_USER,
        payload: {
            user: {}
        }
    }
}
