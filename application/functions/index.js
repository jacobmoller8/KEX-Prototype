'use strict';

const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

exports.fetchBarcode = functions.https.onCall((data, context) => {
	const EANcode = data.EANcode;
	const token = data.token;
	const url = `https://consupedia.se/api/students/products/${EANcode}`
	let apiData = fetch(url, {
		headers: {
			'Accept': 'application/json',
			'Authorization': token
		}
	}).then(res => res.json())
		.then(result => { return result })
		.catch(err => { return err })

	return apiData
}
)