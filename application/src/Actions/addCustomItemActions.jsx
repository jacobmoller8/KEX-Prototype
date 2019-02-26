import { databaseRef } from "../Firebase/firebase";

/* ------------- ACTIONS ------------- */
export const ADD_CUSTOM_TO_SHOP = 'ADD_CUSTOM_TO_SHOP';
export const ADD_CUSTOM_TO_INV = 'ADD_CUSTOM_TO_INV';

/* ------------- ACTION CREATORS ------------- */
export function addCustomItemToShopping(user, name, comment, quantity) {

    var EANCode = Math.floor(Math.random() * 10000000) + 1000000000;
    var date = new Date().toISOString().slice(0, 10);

    var item = {
        "EANcode": EANCode,
        "name": name,
        "dates": [date],
        "comment": comment,
        "quantity": parseInt(quantity)
    }

    databaseRef.ref('users/' + user + '/shopping').child(EANCode).set(item);

    return dispatch => {

        var firebaseCall = databaseRef.ref("users/" + user)

        firebaseCall.once('value', snapshot => {
            snapshot.forEach(childSnap => {
                var item = childSnap.val();
                if (item === "shopping") {
                    dispatch({
                        type: ADD_CUSTOM_TO_SHOP,
                        payload: {
                            shopping: item
                        }
                    })
                }
            })
        });
    }
}

export function addCustomItemToInventory(user, name, comment, quantity) {

    var EANCode = Math.floor(Math.random() * 10000000) + 1000000000;
    var date = new Date().toISOString().slice(0, 10);

    var item = {
        "EANcode": EANCode,
        "name": name,
        "dates": [date],
        "comment": comment,
        "quantity": parseInt(quantity)
    }

    databaseRef.ref('users/' + user + '/inventory').child(EANCode).set(item);

    return dispatch => {

        var firebaseCall = databaseRef.ref("users/" + user)

        firebaseCall.once('value', snapshot => {
            snapshot.forEach(childSnap => {
                var item = childSnap.val();
                if (item === "inventory") {
                    dispatch({
                        type: ADD_CUSTOM_TO_INV,
                        payload: {
                            shopping: item
                        }
                    })
                }
            })
        });
    }
}
