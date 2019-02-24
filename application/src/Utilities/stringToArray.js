export default function stringToArray(inputString) {
	if (inputString !== undefined){
	var splittedString = inputString.split(',')
	var trimmedArray = [];

	for (let word in splittedString){
		let wordWoLeftBracket = splittedString[word].replace('[', '')
		let wordWoRightBracket = wordWoLeftBracket.replace(']', '')
		trimmedArray.push(wordWoRightBracket.trim())
	}

	return trimmedArray
}else{
	return ['none']
}

}