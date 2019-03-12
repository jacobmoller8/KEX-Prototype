import getAccessToken from '../Utilities/getAccessToken'
import firebase from 'firebase/app'
import { store } from '../Store/store'

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
	let currentToken = store.getState().apiInfo.accessToken.replace('"', '');
	let cleanToken = currentToken.replace('"', '')

	let apiUrl = 'https://consupedia.se/api/students/products/' + EANcode;
	/*
	let url = `https://kex-scanner-project.firebaseapp.com/cors?url=${apiUrl}`
	console.log("URL to fetch: " + url)
*/
	let uriParameters = `fetchBarcode?url="${apiUrl}"&accept="application/json"&authorization="${cleanToken}"`
	let encodedURL = `https://kex-scanner-project.firebaseapp.com/${uriParameters}`
	console.log("encoded URL: " + encodedURL)

	let testMessage = ({message: 'WOOHOOO IT WORKS'})
	var fetchBarcode = firebase.functions().httpsCallable('fetchBarcode');
	fetchBarcode({text: testMessage}).then(function(result) {
		// Read result of the Cloud Function.
		var sanitizedMessage = result.data.text;
		console.log(sanitizedMessage)
		// ...
	})
};

/*
	return dispatch => {
		dispatch({ type: REQUEST_ITEM }

		fetch(encodedURL, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				"Accept": "application/json",
				"Authorization": cleanToken
			}
		})
			.then(data => {
				dispatch({
					type: RECIEVE_ITEM,
					payload: data
				})
			})
			.catch((err) => {
				dispatch({
					type: ERROR_ON_FETCH,
					payload: err
				})
			})*/
		/*		fetch(url, {
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
			})*/


/*
curl -X GET https://kex-scanner-project.firebaseapp.com/cors
-H "Content-Type:application/json"
-d '{"url":"https://consupedia.se/api/students/products/4009900466844",
			"accept":"application/json",
			"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmMjlhNmUyYTA5MDcwYjJlZTgwNDM0ZGFjNjgzMzAxOTUyMWJlZGU4MGI2NTA2NDllNjE2ZDQ5Nzk0MGVkMzY2ZWMwNDg4MjE5ZTc0MWY3In0.eyJhdWQiOiIyIiwianRpIjoiZmYyOWE2ZTJhMDkwNzBiMmVlODA0MzRkYWM2ODMzMDE5NTIxYmVkZTgwYjY1MDY0OWU2MTZkNDk3OTQwZWQzNjZlYzA0ODgyMTllNzQxZjciLCJpYXQiOjE1NTIzODMyMjEsIm5iZiI6MTU1MjM4MzIyMSwiZXhwIjoxNTg0MDA1NjIxLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.LuQ8DbhiCNucUtLe0NUk30bCNUs25tC0h48TaodazPrinlvMwlOadMCxAgPj9_EazwqPJ0JOySVgh23MbBytZA1I7GTwr0d2f2ozKUtHAySpB9Xpw7vF72z6msvq4Qn7Tt3th2mnzuO5fE12o2iKX6jpQniIW28-TZHQgfBkKqR7oh_Cdqo8uo3WdlcrUyy1zidHTdTJS8UlNJaGDRRdI1o011PAiaOxigpbXXjBCGPeqxTGQKYzLn7vCagsrOzo0HLYPmVHEG4J89Ht_SNu2Og0W8FvwwLuCq477BnDl-XnbbVPK7G9QPb_y3XBibs3qKiYLW4H8oiWJBFVea00PVfMUh2DghqJBI8PY60acrRe-MQjW3WwVw90wZz0opt-gPLIIn5uSkMCevnoPWmh-c3GyJ0grLZ5QqEH7q_GDwyLwGn81YdKjXxjlmO0Dkl4WxdPGrbozqqznWKdiJqgfOVxZk6hsql9L9o90692ovADMfqWLpAMlYQaTWbLXQbpQx0yM7Oo4rpvb7A0eu4Zgxmp06XusO2IG3o2c0NtjovgG0phXTFIlVaNTF_R1gDUOV2Flc6PF6rJHy6Jl4FGVBwyikOkiERR8XILs_XkHO-KSQ-z1zo9HhKJNom9Hkqj9U1e6yUtYrWmjo4ZvIid6vnE6ulikDnXsDrUbTCyos0" }
 */