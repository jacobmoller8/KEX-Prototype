export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_DATE = 'ORDER_BY_DATE';
export const ORDER_BY_EAN = 'ORDER_BY_EAN';

export const orderByDate = () => ({
	type: ORDER_BY_DATE,
	payload: 'date'
})

export const orderByEAN = () => ({
	type: ORDER_BY_EAN,
	payload: 'EAN'
})

export const orderByName = () => ({
	type: ORDER_BY_NAME,
	payload: 'name'
})

