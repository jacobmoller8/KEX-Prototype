/* ------------- ACTIONS ------------- */
export const APPEND_CURRENT_ITEM = 'APPEND_CURRENT_ITEM';
export const REMOVE_CURRENT_ITEM = 'REMOVE_CURRENT_ITEM';

/* ------------- ACTION CREATORS ------------- */

export function appendCurrentItem(username, screenMode, id) {

    return {
        type: APPEND_CURRENT_ITEM,
        payload: {
            username: username,
            screenMode: screenMode,
            id: id
        }
    }
}

export function removeCurrentItem() {

    return {
        type: REMOVE_CURRENT_ITEM,
        payload: {
            username: "",
            screenMode: "",
            id: ""
        }
    }
}

