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
import { removeShoppingItem, checkItem } from '../../Actions/shoppingActions';
import { setInventory, setTrash, setShopping } from '../../Actions/mainScreenActions';
import { appendCurrentItem } from '../../Actions/currentItemActions';
import { setFilter, emptyFilter } from '../../Actions/searchActions';
import { store } from '../../Store/store';
import { updateFirebaseData } from '../../Actions/firebaseActions';
import { emptyToken } from '../../Actions/apiActions';
import { userLogout } from '../../Actions/userActions';
import FeedbackInput from '../../Components/Presentation/FeedbackInput/FeedbackInput'

class MainScreen extends Component {

	onDelete = (item, from) => {
		if (from === 'inventory') {
			store.dispatch(removeInventoryItem(this.props.user.username, item));
		} else if (from === 'trash') {
			store.dispatch(removeTrashItem(this.props.user.username, item))
		} else if (from === 'shopping') {
			store.dispatch(removeShoppingItem(this.props.user.username, item))
		}
	}

	onAddTo = (item, from) => {
		if (from === 'inventory') {
			store.dispatch(addInvToShopping(this.props.user.username, item));
		} else if (from === 'trash') {
			store.dispatch(addTrashToShopping(this.props.user.username, item));
		}
	}

	onSearchChange = (e) => {
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

		let username = store.getState().user.username
		store.dispatch(updateFirebaseData(username))


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
		store.dispatch(appendCurrentItem(this.props.user.username, this.state.screenMode, id))
		this.props.history.push('/EditItemScreen/' + id)
	}

	onLogoutClick = (e) => {
		e.preventDefault();
		store.dispatch(emptyToken())
		store.dispatch(emptyFilter())
		store.dispatch(userLogout())
		this.props.history.push('/')
	}

	onFeedBackClick = () => {
		this.setState({
			feedBackActive: true
		})
	}

	onCloseFeedbackClick = () => {
		this.setState({
			feedBackActive: false
		})
	}

	handleCheckItem = (item) => {
		store.dispatch(checkItem(this.props.user.username, item));
	}

	render() {
		var currentScreen = this.state.screenMode
		let navStyle = {display: 'block'}

		if (this.state.feedBackActive) {
			currentScreen = <FeedbackInput onCloseFeedbackClick={this.onCloseFeedbackClick} />
			navStyle = {display: 'none'}
		} else if (currentScreen === 'inventory') {
			currentScreen = <Inventory currentInventory={this.state.inventory} onDelete={this.onDelete} onAddTo={this.onAddTo} onAddNewItemClick={this.onAddNewItemClick} onEditItemClick={this.onEditItemClick} onSearch={this.onSearchChange} />
		} else if (currentScreen === 'trash') {
			currentScreen = <Trash currentTrash={this.state.trash} onDelete={this.onDelete} onAddTo={this.onAddTo} onEditItemClick={this.onEditItemClick} onSearch={this.onSearchChange} />
		} else {
			currentScreen = <Shopping currentShopping={this.state.shopping} onDelete={this.onDelete} onAddNewItemClick={this.onAddNewItemClick} onEditItemClick={this.onEditItemClick} onSearch={this.onSearchChange} handleCheck={this.handleCheckItem} />
		}
		return (
			<div>
				<Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} onFeedBackClick={this.onFeedBackClick} currentUser={this.props.user.username} />
				<Navigation switchScreenTo={this.screenChangeHandler} currentScreen={this.state.screenMode} visibility={navStyle}/>
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

	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainScreen));