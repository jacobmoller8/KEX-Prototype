import { SAVE_FEEDBACK, EDIT_FEEDBACK, GET_FEEDBACK, EMPTY_FEEDBACK, REMOVE_FEEDBACK } from '../Actions/feedbackActions';


export default function feedbackReducer(state = {}, action) {
	switch (action.type) {
		case SAVE_FEEDBACK: {
			return {
				...state,
				currentFeedback: action.payload
			}	
		}
		case EDIT_FEEDBACK: {
			return {
				...state,
				currentFeedback: action.payload
			}
		}
		case EMPTY_FEEDBACK: {
			return {
				...state,
				currentFeedback: action.payload
			}
		}
		case GET_FEEDBACK: {
			return {
				...state,
				allFeedback: action.payload
			}
		}
			case REMOVE_FEEDBACK: {
				return {
					...state,
					allFeedback: action.payload
				}
		}
		default:
			return state;
	}
}