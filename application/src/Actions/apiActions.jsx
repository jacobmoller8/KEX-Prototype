import getAccessToken from '../Utilities/getAccessToken'
import {store} from '../Store/store'

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const EMPTY_TOKENS = "EMPTY_TOKENS";
export const REQUEST_ITEM = "REQUEST_ITEM";
export const RECIEVE_ITEM = "RECIEVE_ITEM";
export const ERROR_ON_FETCH = "ERROR_ON_FETCH";

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

export function fetchItem(EANcode) {
	let currentToken = store.getState().apiInfo.accessToken;
	let url = "https://consupedia.se/api/students/products/" + EANcode;

	return dispatch => {
		dispatch({ type: REQUEST_ITEM })

		fetch(url, {
			Headers: {
				Accept: "application/json",
				Authorization: currentToken
			}
		}).then((response) => {
			dispatch({
				type: RECIEVE_ITEM,
				payload: response.json()
			})
		}).catch((err) => {
			dispatch({
				type: ERROR_ON_FETCH,
				payload: err
			})
		})
	}

}
