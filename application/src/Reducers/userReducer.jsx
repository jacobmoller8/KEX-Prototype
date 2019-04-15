import { USER_INPUT, PASS_INPUT, LOG_OUT, USER_REGISTER_USER_INPUT, USER_REGISTER_PASS_INPUT, USER_REGISTER_PASS2_INPUT } from '../Actions/userActions';

export default function userReducer(state = {}, { type, payload }) {
    switch (type) {
        case USER_INPUT:
            return { username: payload.username, password: state.password };
        case PASS_INPUT:
            return { username: state.username, password: payload.password };
        case USER_REGISTER_USER_INPUT:
            return { ...state, register_username: payload.register_username };
        case USER_REGISTER_PASS_INPUT:
            return { ...state, register_password: payload.register_password };
        case USER_REGISTER_PASS2_INPUT:
            return { ...state, register_password2: payload.register_password2 };
        case LOG_OUT:
            return { ...state, username: '', password: '' };
        default:
            return state;
    }
}