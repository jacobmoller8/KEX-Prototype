import { store } from '../Store/store'
import {updateSortedInventory, updateSortedShopping, updateSortedTrash} from '../Actions/firebaseActions'

export default function orderList(list, order, screen) {

	let objArray = []
	let newObj = {}

	Object.keys(list).forEach(function (key) {
		objArray.push(list[key])
	});

	// TODO: Lista ut ett sätt att pusha varje object in i objArray
	// Därefter sortera
	objArray.sort(function (a, b) {
		if (order === 'name') {
			var textA = a.name.toUpperCase();
			var textB = b.name.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		} else if (order === 'EAN') {
			var numA = a.EANcode
			var numB = b.EANcode
			return (numA < numB) ? -1 : (numA > numB) ? 1 : 0;
		} else if (order === 'date') {
			var dateA = new Date(a.dates[0])
			var dateB = new Date(b.dates[0])
			return (dateA < dateB) ? -1 : (dateA > dateB) ? 1 : 0;
		}

	})
	if (screen === 'inventory'){
		store.dispatch(updateSortedInventory(objArray))
	}else if (screen === 'shopping'){
		store.dispatch(updateSortedShopping(objArray))
	}else if (screen === 'trash'){
		store.dispatch(updateSortedTrash(objArray))
	}



}

