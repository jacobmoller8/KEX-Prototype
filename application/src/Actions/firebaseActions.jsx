import { databaseRef } from "../Firebase/firebase";

export const ADD_USER = "users:addUser";
export const REMOVE_USER = "users:removeUser";
export const FETCH_USER = "users:fetchUser";

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

export function removeUser(user) {
    //databaseRef.set(user);
}

export function fetchUser(user) {

    var username = databaseRef.ref('users/' + user);

    var userInfo = "";

    username.on('value', snapshot => {
        userInfo = snapshot.val()

        console.log(userInfo);
    });

    return {
        type: FETCH_USER,
        payload: {
            user: userInfo
        }
    }
}