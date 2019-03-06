import { USER_INPUT, PASS_INPUT, LOG_OUT } from '../Actions/userActions';

export default function userReducer(state = {}, { type, payload }) {
    switch (type) {
        case USER_INPUT:
            return { username: payload.username, password: state.password };
        case PASS_INPUT:
            return { username: state.username, password: payload.password };
        case LOG_OUT:
            return { ...state, username: '', password: '' };
        default:
            return state;
    }
}