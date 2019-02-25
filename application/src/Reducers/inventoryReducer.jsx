
const initialState = {}

export default function inventoryReducer(state = initialState, action) {
    switch (action.type) {
			case "REMOVE_ITEM": {
				return{
					...state,
					inventory: action.payload
				}
			}
        default:
            return state;
    }
}

