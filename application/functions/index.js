'use strict';

const functions = require('firebase-functions');

exports.fetchBarcode = functions.https.onCall((req, res) => {
	console.log("IT WORKED")
	res.status(200).json({
		message: 'It Worked!'
	})
	return({
		message: 'it works',
		text: 'its working'
	})
});