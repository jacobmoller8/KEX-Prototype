/* ------------- ACTIONS ------------- */
export const USER_INPUT = "USER_INPUT";
export const PASS_INPUT = "PASS_INPUT";

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