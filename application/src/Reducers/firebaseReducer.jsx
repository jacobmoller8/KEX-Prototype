import { ADD_USER, LOGIN_USER, REMOVE_USER } from '../Actions/firebaseActions';
import { REMOVE_INV_ITEM, ADD_INV_TO_SHOP } from '../Actions/inventoryActions';
import { REMOVE_TRASH_ITEM, ADD_TRASH_TO_SHOP } from '../Actions/trashActions';
import { REMOVE_SHOP_ITEM } from '../Actions/shoppingActions';
import { ADD_CUSTOM_TO_SHOP, ADD_CUSTOM_TO_INV } from '../Actions/addCustomItemActions';
import {FILTER_ITEMS, EMPTY_FILTER} from '../Actions/searchActions'

export default function firebaseReducer(state = {}, { type, payload }) {
	switch (type) {
		case LOGIN_USER:
			return payload.user;
		case ADD_USER:
			return payload.user;
		case REMOVE_USER:
			return payload.user;
		case REMOVE_INV_ITEM:
			return ({
				...state,
				inventory: payload.inventory
			})
		case REMOVE_TRASH_ITEM:
			return ({
				...state,
				trash: payload.trash
			})
		case ADD_INV_TO_SHOP:
			return ({
				...state,
				shopping: payload.shopping
			})
		case REMOVE_SHOP_ITEM:
			return ({
				...state,
				shopping: payload.shopping
			})
		case ADD_TRASH_TO_SHOP:
			return ({
				...state,
				shopping: payload.shopping
			})
		case ADD_CUSTOM_TO_SHOP:
			return ({
				...state,
				shopping: payload.shopping
			})
		case ADD_CUSTOM_TO_INV:
			return ({
				...state,
				inventory: payload.inventory
			})
		case FILTER_ITEMS:
		return({
			...state,
			filter: payload
		})
		case EMPTY_FILTER:
		return({
			...state,
			filter: payload
		})

		default:
			return state;
	}
}