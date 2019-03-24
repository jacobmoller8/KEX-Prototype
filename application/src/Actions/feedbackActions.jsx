import { databaseRef } from "../Firebase/firebase";
export const SAVE_FEEDBACK = 'SAVE_FEEDBACK';
export const EMPTY_FEEDBACK = 'EMPTY_FEEDBACK'
export const EDIT_FEEDBACK = 'EDIT_FEEDBACK';
export const GET_FEEDBACK = 'GET_FEEDBACK';

var uuid4 = require('uuid4');

export function saveFeedback(user, feedback) {
	var newID = uuid4();
	databaseRef.ref('users/' + user + '/feedback').child(newID).set(feedback)

	return dispatch => {
		dispatch({
			type: SAVE_FEEDBACK,
			payload: ''
		})
	}
}

export const editFeedback = (value) => ({
	type: EDIT_FEEDBACK,
	payload: value
});

export function getFeedback(user) {
	return dispatch => {

		//get new copy of all feedbacks
		var firebaseCall = databaseRef.ref("users/" + user + '/feedback')
		let feedBackList = []
		firebaseCall.once('value', snapshot => {
			snapshot.forEach(childSnap => {
				feedBackList.push(childSnap.val())
			})
		});
		dispatch({
			type: GET_FEEDBACK,
			payload: feedBackList
		})
	}
}

export const emptyFeedback = () => ({
	type: EMPTY_FEEDBACK,
	payload: ''
})

export function deleteFeedback(user, item) {
	//TODO: LETS USER DELETE UNWANTED FEEDBACK
}