import { databaseRef } from "../Firebase/firebase";

export const ADD_USER = "users:addUser";
export const REMOVE_USER = "users:removeUser";
export const LOGIN_USER = "user:tryLogin";

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
