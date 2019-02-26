import { FETCH_USER, ADD_USER, LOGIN_USER } from '../Actions/firebaseActions';
import { REMOVE_ITEM } from '../Actions/inventoryActions'

export default function firebaseReducer(state = "", { type, payload }) {
    switch (type) {
        case FETCH_USER:
            return payload.user;
        case LOGIN_USER:
            return payload.user;
        case ADD_USER:
            return payload.user;
				case REMOVE_ITEM:
						return ({
							...state,
							inventory: payload.inventory
						})
				default:
            return state;
    }
}