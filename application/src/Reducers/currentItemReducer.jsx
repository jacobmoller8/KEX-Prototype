import { APPEND_CURRENT_ITEM, REMOVE_CURRENT_ITEM } from '../Actions/currentItemActions';

export default function currentItemReducer(state = {}, { type, payload }) {
    switch (type) {
        case APPEND_CURRENT_ITEM:
            return { username: payload.username, screenMode: payload.screenMode, id: payload.id }
        case REMOVE_CURRENT_ITEM:
            return { username: payload.username, screenMode: payload.screenMode, id: payload.id }
        default:
            return state;
    }
}