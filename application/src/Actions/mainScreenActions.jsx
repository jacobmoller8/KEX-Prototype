/* ------------- ACTIONS ------------- */
export const SET_INVENTORY = 'SET_INVENTORY';
export const SET_TRASH = 'SET_TRASH';
export const SET_SHOPPING = 'SET_SHOPPING';



/* ------------- ACTION CREATORS ------------- */
export const setInventory = (screenMode) => ({
	type: SET_INVENTORY,
	payload: screenMode
});

export const setTrash = (screenMode) => ({
	type: SET_TRASH,
	payload: screenMode
});

export const setShopping = (screenMode) => ({
	type: SET_SHOPPING,
	payload: screenMode
});