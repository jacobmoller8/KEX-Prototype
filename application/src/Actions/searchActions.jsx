export const FILTER_ITEMS = 'FILTER_ITEMS';
export const EMPTY_FILTER = 'EMPTY_FILTER'
/* ------------- ACTION CREATORS ------------- */
export function setFilter(searchWord){
	let wordInLowerCase = searchWord.toLowerCase()
	return{
	type: FILTER_ITEMS,
	payload: wordInLowerCase
}
};

export function emptyFilter(){
	return{
	type: EMPTY_FILTER,
	payload: ''
}
};