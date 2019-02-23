import { databaseRef } from "../Firebase/firebase";

export const ADD_USER = "users:addUser";
export const REMOVE_USER = "users:removeUser";
export const FETCH_USER = "users:fetchUser";
export const LOGIN_USER = "user:tryLogin";

export function addUser(user) {

	databaseRef.ref('users/' + user).set({
		username: "username",
		email: "email",
	});

	return {
		type: ADD_USER,
		payload: {
			user: user
		}
	}

}

export function tryLoginUser(username, password) {
	var firebaseCall = databaseRef.ref("users/" + username)

	console.log(username);
	console.log(password);

	firebaseCall.on('value', snapshot => {
		var userObject = snapshot.val()
		console.log(userObject)

		if (username === userObject["username"] && password === userObject["password"]) {
			console.log("log in accepted")
			return {
				type: LOGIN_USER,
				payload: {
					user: userObject
				}
			}
		} else {
			console.log("log in denied")
		}

	});
	return {
		type: LOGIN_USER,
		payload: {
			user: "access Denied"
		}
	}

}



export function removeUser(user) {
	//databaseRef.set(user);
}

export function fetchUser(user) {

	var username = databaseRef.ref('users/' + user);

	var userInfo = "";

	username.on('value', snapshot => {
		userInfo = snapshot.val()

		console.log(userInfo);
	});

	return {
		type: FETCH_USER,
		payload: {
			user: userInfo
		}
	}
}