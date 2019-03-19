import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import AddItem from '../Presentation/AddItem/AddItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCustomItemToShopping, addCustomItemToInventory } from '../../Actions/addCustomItemActions';
import { store } from '../../Store/store';
import { updateFirebaseData } from '../../Actions/firebaseActions';
import { fetchItem, emptyToken } from '../../Actions/apiActions';
import { emptyFilter } from '../../Actions/searchActions';
import { userLogout } from '../../Actions/userActions';


class AddItemScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			fullName: "",
			fetchedEAN: "",
			comment: "",
			quantity: "",
			EANSearchValue: "",
			status: "none",
			message: "",
			currentError: ""
		}

	}
	componentWillMount() {
		let username = store.getState().user.username
		store.dispatch(updateFirebaseData(username))
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.fetchedItem) {
			if (nextProps.fetchedItem.message) {
				this.setState({
					currentError: 'Unkown Barcode'
				})
			} else {
				let fetchedName = nextProps.fetchedItem.name
				let fetchedFullName = nextProps.fetchedItem.fullname
				let fetchedEAN = this.state.EANSearchValue

				this.setState({
					name: fetchedName,
					fullName: fetchedFullName,
					fetchedEAN,
					quantity: 1
				})
			}
		}
	}

	onApiSearch = () => {
		if (this.state.EANSearchValue.length === 13) {
			if (/^\d+$/.test(this.state.EANSearchValue)) {
				store.dispatch(fetchItem(this.state.EANSearchValue))
			}
			else {
				this.setState({ currentError: 'The barcode can only contain numbers' })
			}

		} else {
			this.setState({ currentError: `The barcode must contain 13 characters, your search contained: ${this.state.EANSearchValue.length}` })
		}

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
				addCustomItemToInventory(this.props.username, this.state.name, this.state.comment, this.state.quantity, this.state.fetchedEAN, this.state.fullName)
				this.setState({ status: "accept", message: "Item added successfully" })
				this.resetState()
			}
			else if (this.props.screenMode === "shopping") {
				addCustomItemToShopping(this.props.username, this.state.name, this.state.comment, this.state.quantity, this.state.fetchedEAN, this.state.fullName)
				this.setState({ status: "accept", message: "Item added successfully" })
				this.resetState()
			}
		}
	}

	resetState = () => {
		this.setState({
			name: "",
			fullName: "",
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
	updateFullNameValue = (input) => {
		this.setState({
			fullName: input
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
			EANSearchValue: input,
			currentError: ''
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
					FullNameValue={this.state.fullName}
					CommentValue={this.state.comment}
					QuantityValue={this.state.quantity}
					EANSearchValue={this.state.EANSearchValue}
					updateEANSearchValue={(e) => this.updateEANSearchValue(e.target.value)}
					updateNameValue={(e) => this.updateNameValue(e.target.value)}
					updateFullNameValue={(e) => this.updateFullNameValue(e.target.value)}
					updateCommentValue={(e) => this.updateCommentValue(e.target.value)}
					updateQuantityValue={(e) => this.updateQuantityValue(e.target.value)}
					onApiSearch={() => this.onApiSearch()}
					status={this.state.status}
					message={this.state.message}
					currentError={this.state.currentError}></AddItem>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		username: state.firebase.username,
		screenMode: state.mainScreen.mainScreenMode,
		fetchedItem: state.apiInfo.fetchedItem
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addCustomItemToShopping: () => dispatch(addCustomItemToShopping()),
		addCustomItemToInventory: () => dispatch(addCustomItemToInventory())
	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItemScreen));
