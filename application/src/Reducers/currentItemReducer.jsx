import { APPEND_CURRENT_ITEM, REMOVE_CURRENT_ITEM } from '../Actions/currentItemActions';

export default function currentItemReducer(state = {}, action) {
    switch (action.type) {
        case APPEND_CURRENT_ITEM:
            return ({
                currentItem: action.currentItem
            })
        default:
            return state;
    }
}