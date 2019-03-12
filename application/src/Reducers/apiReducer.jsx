import { SET_ACCESS_TOKEN, EMPTY_TOKENS, RECIEVE_ITEM, REQUEST_ITEM, ERROR_ON_FETCH } from '../Actions/apiActions';

const initialState = {
	accessToken: '',
	fetching: false,
	fetched: false,
	fetchedItem: '',
	error: null
}


export default function apiReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_ACCESS_TOKEN: {
			return {
				accessToken: payload
			}
		}
		case EMPTY_TOKENS: {
			return {
				accessToken: payload
			}
		}
		case REQUEST_ITEM: {
			return {
				...state,
				fetching: true
			}
		}
		case ERROR_ON_FETCH: {
			return {
				...state,
				fetching: false,
				error: payload
			}
		}
		case RECIEVE_ITEM: {
			console.log("RECIEVED ITEM: " + payload)
			return {
				...state,
				fetching: false,
				fetched: true,
				fetchedItem: payload
			}
		}
		default:
			return state;
	}
}