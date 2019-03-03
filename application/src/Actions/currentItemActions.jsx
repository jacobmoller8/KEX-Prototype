import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const APPEND_CURRENT_ITEM = 'APPEND_CURRENT_ITEM';
export const REMOVE_CURRENT_ITEM = 'REMOVE_CURRENT_ITEM';
export const CONFIRM_CURRENT_ITEM = 'CONFIRM_CURRENT_ITEM';

/* ------------- ACTION CREATORS ------------- */

export function appendCurrentItem(username, screenMode, id) {

    return dispatch => {
        var firebaseCall = databaseRef.ref("users/" + username + "/" + screenMode + "/" + id)

        firebaseCall.once('value', snapshot => {
            var userObject = snapshot.val()
            dispatch({
                type: APPEND_CURRENT_ITEM,
                payload: {
                    username: username,
                    screenMode: screenMode,
                    item: userObject
                }
            })
        });
    }
}

export function confirmCurrentItem(username, screenMode, id, name, comment, quantity) {

    var item = {
        "EANcode": id,
        "name": name,
        "comment": comment,
        "quantity": parseInt(quantity)
    }

    databaseRef.ref('users/' + username + screenMode).child(id).update(item);

    return dispatch => {
        var firebaseCall = databaseRef.ref("users/" + username + "/" + screenMode + "/" + id)
        firebaseCall.once('value', snapshot => {
            var userObject = snapshot.val()
            dispatch({
                type: APPEND_CURRENT_ITEM,
                payload: {
                    username: username,
                    screenMode: screenMode,
                    item: userObject
                }
            })
        });
    }
}






export function removeCurrentItem() {

    return {
        type: REMOVE_CURRENT_ITEM,
        payload: {
            username: "",
            screenMode: "",
            item: ""
        }
    }
}

