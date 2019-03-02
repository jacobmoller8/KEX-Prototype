/* ------------- ACTIONS ------------- */
export const APPEND_CURRENT_ITEM = 'APPEND_CURRENT_ITEM';
export const REMOVE_CURRENT_ITEM = 'REMOVE_CURRENT_ITEM';

/* ------------- ACTION CREATORS ------------- */

export function appendCurrentItem(username, screenMode, itemId) {

    console.log(username)
    console.log(screenMode)
    console.log(itemId)

    return {
        type: APPEND_CURRENT_ITEM,
        itemId
    }
}

