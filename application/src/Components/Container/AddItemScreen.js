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
			EANSearchValue: "",
			status: "none",
			message: ""
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
		if (isNaN(this.state.quantity) || this.state.quantity === "") {
			this.setState({ status: "error", message: "Quantity is not a number" })
		}
		else {
			if (this.state.quantity < 1) {
				this.setState({ status: "error", message: "Quantity must be atleast 1" })
			}
			else if (this.props.screenMode === "inventory") {
				addCustomItemToInventory(this.props.username, this.state.name, this.state.comment, this.state.quantity)
				this.setState({ status: "accept", message: "Item added successfully" })
				this.resetState()
			}
			else if (this.props.screenMode === "shopping") {
				addCustomItemToShopping(this.props.username, this.state.name, this.state.comment, this.state.quantity)
				this.setState({ status: "accept", message: "Item added successfully" })
				this.resetState()
			}
		}
	}

	resetState = () => {
		this.setState({
			name: "",
			comment: "",
			quantity: "",
			EANSearchValue: "",
		})
	}
	resetItemBoxState = () => {
		this.setState({
			status: "none",
			message: ""
		})
	}

	updateNameValue = (input) => {
		this.setState({
			name: input
		})
		this.resetItemBoxState()
	}
	updateCommentValue = (input) => {
		this.setState({
			comment: input
		})
		this.resetItemBoxState()
	}
	updateQuantityValue = (input) => {
		this.setState({
			quantity: input
		})
		this.resetItemBoxState()
	}

	updateEANSearchValue = (input) => {
		this.setState({
			EANSearchValue: input
		})
		this.resetItemBoxState()
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
					onApiSearch={() => this.onApiSearch()}
					status={this.state.status}
					message={this.state.message}></AddItem>
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
