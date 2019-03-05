import { SET_ACCESS_TOKEN, EMPTY_TOKENS } from '../Actions/apiActions';


export default function apiReducer(state = '', { type, payload }) {
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
		default:
			return state;
	}
}