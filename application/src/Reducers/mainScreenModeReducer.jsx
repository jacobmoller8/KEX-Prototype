import { SET_INVENTORY, SET_TRASH, SET_SHOPPING} from '../Actions/mainScreenActions';

const initialState = {
	mainScreenMode: 'inventory'
}

export default function mainScreenModeReducer(state = initialState, action) {
    switch (action.type) {
			case SET_INVENTORY: {
				return {
					...state,
					mainScreenMode: action.payload
				}
			}
			case SET_TRASH: {
				return {
					...state,
					mainScreenMode: action.payload
				}
			}
			case SET_SHOPPING: {
				return {
					...state,
					mainScreenMode: action.payload
				}
			}
        default:
            return state;
    }
}

