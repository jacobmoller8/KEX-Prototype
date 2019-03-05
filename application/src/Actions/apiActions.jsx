import getAccessToken from '../Utilities/getAccessToken'

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const EMPTY_TOKENS = "EMPTY_TOKENS";

export function setToken() {
    return dispatch => {
        let token = getAccessToken()

        token.then(result => dispatch({
            type: SET_ACCESS_TOKEN,
            payload: result
        }))
    }
}

export const emptyToken = () => ({
	type: EMPTY_TOKENS,
	payload: ''
})

