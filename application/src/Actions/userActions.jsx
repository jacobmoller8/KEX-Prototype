export const USER_INPUT = "user:userLoginUserInput";
export const PASS_INPUT = "user:userLoginPassInput";

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