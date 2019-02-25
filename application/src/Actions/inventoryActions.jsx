/* ------------- ACTIONS ------------- */
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';



/* ------------- ACTION CREATORS ------------- */
export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item
});

export const editItem = (item) => ({
	type: EDIT_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});

export const addItem = () => ({
	type: ADD_ITEM,
	payload: "CHANGE SCREEN TO ITEMSCREEN"
});