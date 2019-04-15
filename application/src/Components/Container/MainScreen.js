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
import { saveFeedback, editFeedback, emptyFeedback, getFeedback, deleteFeedback } from '../../Actions/feedbackActions';

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
		store.dispatch(getFeedback(this.props.user.username))
		this.setState({
			feedBackActive: true
		})
	}

	onSaveFeedbackClick = () => {

		if (store.getState().feedback.currentFeedback !== '') {
			store.dispatch(saveFeedback(this.props.user.username, store.getState().feedback.currentFeedback));
		}
		store.dispatch(emptyFeedback)
		store.dispatch(getFeedback(this.props.user.username))
	}

	onCloseFeedbackClick = () => {
		store.dispatch(emptyFeedback)
		this.setState({
			feedBackActive: false
		})
	}

	handleFeedbackChange = (input) => {
		store.dispatch(editFeedback(input));
	}

	onRemoveFeedbackClick = (item) => {
		store.dispatch(deleteFeedback(this.props.user.username, item))
	}


	handleCheckItem = (item) => {
		store.dispatch(checkItem(this.props.user.username, item));
	}

	onDragStart = () => {
		this.setState({ 'dragging': true })
	}

	onDragEnd = () => {
		this.setState({ 'dragging': false })
	}

	onDragDropped = (data) => {
		this.onDelete(data.dragData.id, 'shopping')
	}

	onDropZoneEntered = () => {
		this.setState({'overDropZone': true})
	}

	onDropZoneExited = () => {
		this.setState({'overDropZone': false})
	}

	render() {
		var currentScreen = this.state.screenMode
		let navStyle = { display: 'block' }

		if (this.state.feedBackActive) {
			currentScreen = <FeedbackInput onCloseFeedbackClick={this.onCloseFeedbackClick} onSaveFeedbackClick={this.onSaveFeedbackClick} handleValueChange={this.handleFeedbackChange} allFeedback={this.props.allFeedback} setValue={this.props.feedbackValue} onDeleteClick={this.onRemoveFeedbackClick} />
			navStyle = { display: 'none' }
		} else if (currentScreen === 'inventory') {
			currentScreen = <Inventory
				currentInventory={this.state.inventory}
				onDelete={this.onDelete}
				onAddTo={this.onAddTo}
				onAddNewItemClick={this.onAddNewItemClick}
				onEditItemClick={this.onEditItemClick}
				onSearch={this.onSearchChange} />
		} else if (currentScreen === 'trash') {
			currentScreen = <Trash
				currentTrash={this.state.trash}
				onDelete={this.onDelete}
				onAddTo={this.onAddTo}
				onEditItemClick={this.onEditItemClick}
				onSearch={this.onSearchChange} />
		} else {
			currentScreen = <Shopping
				currentShopping={this.state.shopping}
				onDelete={this.onDelete}
				onAddNewItemClick={this.onAddNewItemClick}
				onEditItemClick={this.onEditItemClick}
				onSearch={this.onSearchChange}
				handleCheck={this.handleCheckItem}
				onDragStart={this.onDragStart}
				onDragEnd={this.onDragEnd}
				onDragDropped={this.onDragDropped}
				dragging={this.state.dragging}
				onDropZoneEntered={this.onDropZoneEntered}
				onDropZoneExited={this.onDropZoneExited}
				overDropZone={this.state.overDropZone} />
		}
		return (
			<div>
				<Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} onFeedBackClick={this.onFeedBackClick} currentUser={this.props.user.username} />
				<Navigation switchScreenTo={this.screenChangeHandler} currentScreen={this.state.screenMode} visibility={navStyle} />
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
		screenMode: state.mainScreen.mainScreenMode,
		allFeedback: state.feedback.allFeedback,
		feedbackValue: state.feedback.currentFeedback
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