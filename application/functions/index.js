const functions = require('firebase-functions');

	exports.logCreate = functions.database.ref('/users/{Frottel}/{inventory}/{id}')
	.onCreate((snapshot, context) => {

		let currentUser = snapshot.ref.parent.parent.key
		let location = snapshot.ref.parent.key
		let currentTime = new Date().toLocaleString('en-GB', {timeZone: 'Europe/Stockholm'});
		
		if (currentUser === 'logs'){
			console.log("Reached")
			return null
		}

		let logObject = {'Time': currentTime}

		return snapshot.ref.parent.parent.parent.parent.child('logs').child(currentUser).child('create').child(location).push(logObject)
	});

	exports.logUpdate = functions.database.ref('/users/{Frottel}/{inventory}/{id}')
	.onUpdate((change) => {

		let currentUser = change.before.ref.parent.parent.key
		let location = change.before.ref.parent.key
		let currentTime = new Date().toLocaleString('en-GB', {timeZone: 'Europe/Stockholm'});
		
		if (currentUser === 'logs'){
			console.log("Reached")
			return null
		}

		let logObject = {'Time': currentTime}

		return change.before.ref.parent.parent.parent.parent.child('logs').child(currentUser).child('update').child(location).push(logObject)
	});