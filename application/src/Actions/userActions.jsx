/* ------------- ACTIONS ------------- */
export const USER_INPUT = "USER_INPUT";
export const PASS_INPUT = "PASS_INPUT";
export const LOG_OUT = "LOG_OUT";
export const USER_REGISTER_USER_INPUT = "USER_REGISTER_INPUT";
export const USER_REGISTER_PASS_INPUT = "USER_REGISTER_PASS_INPUT";
export const USER_REGISTER_PASS2_INPUT = "USER_REGISTER_PASS2_INPUT";

/* ------------- ACTION CREATORS ------------- */
export function userLoginUserInput(username) {
    return {
        type: USER_INPUT,
        payload: {
            username: username
        }
    }
}
export function userLoginPassInput(password) {
    return {
        type: PASS_INPUT,
        payload: {
            password: password
        }
    }
}
export function userRegisterUserInput(username) {
    return {
        type: USER_REGISTER_USER_INPUT,
        payload: {
            register_username: username
        }
    }
}
export function userRegisterPassInput(password) {
    return {
        type: USER_REGISTER_PASS_INPUT,
        payload: {
            register_password: password
        }
    }
}
export function userRegisterPass2Input(password) {
    return {
        type: USER_REGISTER_PASS2_INPUT,
        payload: {
            register_password2: password
        }
    }
}


export function userLogout() {
    return {
        type: LOG_OUT
    }
}