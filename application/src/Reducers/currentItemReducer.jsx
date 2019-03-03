import { APPEND_CURRENT_ITEM, REMOVE_CURRENT_ITEM, CONFIRM_CURRENT_ITEM } from '../Actions/currentItemActions';

export default function currentItemReducer(state = {}, { type, payload }) {
    switch (type) {
        case APPEND_CURRENT_ITEM:
            return { username: payload.username, screenMode: payload.screenMode, item: payload.item }
        case REMOVE_CURRENT_ITEM:
            return { username: payload.username, screenMode: payload.screenMode, item: payload.item }
        case CONFIRM_CURRENT_ITEM:
            return { username: state.username, screenMode: payload.screenMode, item: payload.item }
        default:
            return state;
    }
}