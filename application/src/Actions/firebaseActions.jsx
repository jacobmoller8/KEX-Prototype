import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_FIREBASE_DATA = "UPDATE_FIREBASE_DATA";

/* ------------- ACTION CREATORS ------------- */
export function updateFirebaseData(username) {

    return dispatch => {
        var firebaseCall = databaseRef.ref("users/" + username)

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



/* ------------- NOT USED FUNCTIONS ------------ */
export function addUser(user) {

    databaseRef.ref('users/' + user).set({
        username: "username",
        email: "email",
    });

    return {
        type: ADD_USER,
        payload: {
            user: user
        }
    }
}

export function removeUser() {

    return {
        type: REMOVE_USER,
        payload: {
            user: {}
        }
    }
}
