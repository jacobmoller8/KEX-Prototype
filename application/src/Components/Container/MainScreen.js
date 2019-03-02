import React, { Component } from 'react'
import { connect } from "react-redux";
import Header from '../Presentation/Header/Header';
import Navigation from '../Presentation/Navigation/Navigation';
import Inventory from '../Presentation/Inventory/Inventory';
import Trash from '../Presentation/Trash/Trash';
import Shopping from '../Presentation/Shopping/Shopping';
import { withRouter } from "react-router-dom";
import { removeInventoryItem, addInvToShopping } from '../../Actions/inventoryActions';
import { removeTrashItem, addTrashToShopping } from '../../Actions/trashActions';
import { removeShoppingItem } from '../../Actions/shoppingActions';
import { setInventory, setTrash, setShopping } from '../../Actions/mainScreenActions';
import { appendCurrentItem } from '../../Actions/currentItemActions';
import {setFilter, emptyFilter} from '../../Actions/searchActions'
import store from '../../Store/store'

class MainScreen extends Component {
	constructor(props){
		super(props)

		this.onDelete = this.onDelete.bind(this);
		this.onAddTo = this.onAddTo.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.screenChangeHandler = this.screenChangeHandler.bind(this);
		this.onAddNewItemClick = this.onAddNewItemClick.bind(this);
		this.onEditItemClick = this.onEditItemClick.bind(this);
		this.onLogoutClick = this.onLogoutClick.bind(this);
	}

	onDelete = (item, from) => {
		if (from === 'inventory') {
			removeInventoryItem(this.props.user.username, item);
		} else if (from === 'trash') {
			removeTrashItem(this.props.user.username, item)
		} else if (from === 'shopping') {
			removeShoppingItem(this.props.user.username, item)
		}
	}

	onAddTo = (item, from) => {
		if (from === 'inventory') {
			addInvToShopping(this.props.user.username, item);
		} else if (from === 'trash') {
			addTrashToShopping(this.props.user.username, item);
		}
	}

	onSearchChange = (e) => {
		console.log(e.target.value)
		store.dispatch(setFilter(e.target.value))
	}

	screenChangeHandler = (toScreen) => {
		store.dispatch(emptyFilter())
		if (toScreen === 'inventory') {
			this.props.setInventory();
		} else if (toScreen === 'trash') {
			this.props.setTrash();
		} else {
			this.props.setShopping();
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			inventory: nextProps.inventory,
			trash: nextProps.trash,
			shopping: nextProps.shopping,
			screenMode: nextProps.screenMode
		})
	}

	componentWillMount() {
		let screenOnMount = store.getState().mainScreen.mainScreenMode;
		let inventoryOnMount = store.getState().firebase.inventory;
		let shoppingOnMount = store.getState().firebase.shopping;
		let trashOnMount = store.getState().firebase.trash;
		this.setState({
			inventory: inventoryOnMount,
			trash: trashOnMount,
			shopping: shoppingOnMount,
			screenMode: screenOnMount
		})
	}

	onAddNewItemClick = (e) => {
		store.dispatch(emptyFilter())
		e.preventDefault();
		this.props.history.push('/AddItemScreen')
	}
	onEditItemClick = (id) => {
		store.dispatch(emptyFilter())
		console.log(id + " clicked")
		appendCurrentItem(this.props.user.username, this.state.screenMode, id)
		this.props.history.push('/EditItemScreen/' + id)
	}

	onLogoutClick = (e) => {
		store.dispatch(emptyFilter())
		e.preventDefault();
		this.props.history.push('/')
	}

	render() {
		var currentScreen = this.state.screenMode
		if (currentScreen === 'inventory') {
			currentScreen = <Inventory currentInventory={this.state.inventory} onDelete={this.onDelete} onAddTo={this.onAddTo} onAddNewItemClick={this.onAddNewItemClick} onEditItemClick={this.onEditItemClick} onSearch={this.onSearchChange}/>
		} else if (currentScreen === 'trash') {
			currentScreen = <Trash currentTrash={this.state.trash} onDelete={this.onDelete} onAddTo={this.onAddTo} onEditItemClick={this.onEditItemClick} onSearch={this.onSearchChange}/>
		} else {
			currentScreen = <Shopping currentShopping={this.state.shopping} onDelete={this.onDelete} onAddNewItemClick={this.onAddNewItemClick} onEditItemClick={this.onEditItemClick} onSearch={this.onSearchChange}/>
		}
		return (
			<div>
				<Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} currentUser={this.props.user.username} />
				<Navigation switchScreenTo={this.screenChangeHandler} currentScreen={this.state.screenMode} />
				{currentScreen}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		firebase: state.firebase,
		inventory: state.firebase.inventory,
		trash: state.firebase.trash,
		shopping: state.firebase.shopping,
		screenMode: state.mainScreen.mainScreenMode
	}
};

const mapDispatchToProps = dispatch => {
	return {
		setInventory: () => dispatch(setInventory('inventory')),
		setShopping: () => dispatch(setShopping('shopping')),
		setTrash: () => dispatch(setTrash('trash')),
		appendCurrentItem: appendCurrentItem
	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainScreen));