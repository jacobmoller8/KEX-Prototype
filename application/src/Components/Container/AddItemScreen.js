import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import AddItem from '../Presentation/AddItem/AddItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCustomItemToShopping, addCustomItemToInventory } from '../../Actions/addCustomItemActions';
import { store } from '../../Store/store';
import { tryLoginUser } from '../../Actions/firebaseActions';
import { fetchItem, emptyToken } from '../../Actions/apiActions';
import { emptyFilter } from '../../Actions/searchActions';
import { userLogout } from '../../Actions/userActions';


class AddItemScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			name: "",
			comment: "",
			quantity: "",
			EANSearchValue: ""
		}

	}
	componentWillMount() {
		let username = store.getState().user.username
		store.dispatch(tryLoginUser(username))
	}

	onApiSearch = () => {
		console.log('SEARCH VALUE: ' + this.state.EANSearchValue)
		if (this.state.EANSearchValue.length === 13) {
			store.dispatch(fetchItem(this.state.EANSearchValue))
		}
		console.log(store.getState().apiInfo.fetchedItem)
	}

	onAddItemClick = (e) => {
		e.preventDefault();
		if (isNaN(this.state.quantity)) {
			console.log("Quantity is not a number")
		}
		else {
			if (this.props.screenMode === "inventory") {
				addCustomItemToInventory(this.props.username, this.state.name, this.state.comment, this.state.quantity)
				this.resetState()
			}
			if (this.props.screenMode === "shopping") {
				addCustomItemToShopping(this.props.username, this.state.name, this.state.comment, this.state.quantity)
				this.resetState()
			}
		}
	}

	resetState = () => {
		this.setState({
			name: "",
			comment: "",
			quantity: "",
			EANSearchValue: ""
		})
	}

	updateNameValue = (input) => {
		this.setState({
			name: input
		})
	}
	updateCommentValue = (input) => {
		this.setState({
			comment: input
		})
	}
	updateQuantityValue = (input) => {
		this.setState({
			quantity: input
		})
	}

	updateEANSearchValue = (input) => {
		this.setState({
			EANSearchValue: input
		})
	}

	onGoBackClick = (e) => {
		e.preventDefault();
		this.props.history.push('/MainScreen');
	}

	onLogoutClick = (e) => {
		e.preventDefault();
		store.dispatch(emptyToken())
		store.dispatch(emptyFilter())
		store.dispatch(userLogout())
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} currentUser={"addItem"} />
				<AddItem
					onAddItemClick={this.onAddItemClick}
					onGoBackClick={this.onGoBackClick}
					NameValue={this.state.name}
					CommentValue={this.state.comment}
					QuantityValue={this.state.quantity}
					EANSearchValue={this.state.EANSearchValue}
					updateEANSearchValue={(e) => this.updateEANSearchValue(e.target.value)}
					updateNameValue={(e) => this.updateNameValue(e.target.value)}
					updateCommentValue={(e) => this.updateCommentValue(e.target.value)}
					updateQuantityValue={(e) => this.updateQuantityValue(e.target.value)}
					onApiSearch={() => this.onApiSearch()} ></AddItem>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		username: state.firebase.username,
		screenMode: state.mainScreen.mainScreenMode
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addCustomItemToShopping: () => dispatch(addCustomItemToShopping()),
		addCustomItemToInventory: () => dispatch(addCustomItemToInventory())
	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItemScreen));
