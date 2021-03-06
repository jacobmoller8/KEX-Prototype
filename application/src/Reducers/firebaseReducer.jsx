import { ADD_USER, UPDATE_FIREBASE_DATA, REMOVE_USER, TRY_REGISTER_NEW_USER, UPDATE_SORTED_INVENTORY, UPDATE_SORTED_SHOPPING, UPDATE_SORTED_TRASH } from '../Actions/firebaseActions';
import { REMOVE_INV_ITEM, ADD_INV_TO_SHOP } from '../Actions/inventoryActions';
import { REMOVE_TRASH_ITEM, ADD_TRASH_TO_SHOP } from '../Actions/trashActions';
import { REMOVE_SHOP_ITEM, CHECK_ITEM } from '../Actions/shoppingActions';
import { ADD_CUSTOM_TO_SHOP, ADD_CUSTOM_TO_INV } from '../Actions/addCustomItemActions';
import { FILTER_ITEMS, EMPTY_FILTER } from '../Actions/searchActions'

export default function firebaseReducer(state = {}, { type, payload }) {
	switch (type) {
		case UPDATE_FIREBASE_DATA:
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
			return ({
				...state,
				filter: payload
			})
		case EMPTY_FILTER:
			return ({
				...state,
				filter: payload
			})
		case CHECK_ITEM:
			return ({
				...state,
				shopping: payload.shopping
			})
			case UPDATE_SORTED_INVENTORY:
			return ({
				...state,
				inventory: payload
			})
			case UPDATE_SORTED_TRASH:
			return ({
				...state,
				trash: payload
			})
			case UPDATE_SORTED_SHOPPING:
			return ({
				...state,
				shopping: payload
			})
		case TRY_REGISTER_NEW_USER:
			return payload.user
		default:
			return state;
	}
}