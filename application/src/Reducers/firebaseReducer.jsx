import { FETCH_USER, ADD_USER, LOGIN_USER } from '../Actions/firebaseActions';

export default function firebaseReducer(state = "", { type, payload }) {
    switch (type) {
        case FETCH_USER:
            return payload.user;
        case LOGIN_USER:
            return payload.user;
        case ADD_USER:
            return payload.user;
        default:
            return state;
    }
}