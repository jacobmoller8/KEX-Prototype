/* ------------- ACTIONS ------------- */
export const USER_INPUT = "USER_INPUT";
export const PASS_INPUT = "PASS_INPUT";
export const LOG_OUT = "LOG_OUT";

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

export function userLogout() {
    return {
        type: LOG_OUT
    }
}