import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const LOGIN_USER = "LOGIN_USER";

/* ------------- ACTION CREATORS ------------- */
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

export function tryLoginUser(username) {

    return dispatch => {
        var firebaseCall = databaseRef.ref("users/" + username)

        firebaseCall.on('value', snapshot => {
            var userObject = snapshot.val()
            dispatch({
                type: LOGIN_USER,
                payload: {
                    user: userObject
                }
            })
        });
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
