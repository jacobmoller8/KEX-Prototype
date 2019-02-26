import React, { Component } from 'react'
import { connect } from "react-redux";
import Header from '../Presentation/Header/Header';
import Navigation from '../Presentation/Navigation/Navigation';
import Inventory from '../Presentation/Inventory/Inventory';
import Trash from '../Presentation/Trash/Trash';
import Shopping from '../Presentation/Shopping/Shopping';
import { withRouter } from "react-router-dom";
import removeItem  from '../../Actions/inventoryActions';
import { setInventory, setTrash, setShopping } from '../../Actions/mainScreenActions'

class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.screenChangeHandler = this.screenChangeHandler.bind(this)
		this.onLogoutClick = this.onLogoutClick.bind(this);
		this.onDelete = this.onDelete.bind(this);

		this.state = {
			inventory: {},
			trash: {},
			shopping: {},
			screenMode: 'inventory'
		}
	}

	onDelete(item){
		removeItem(this.props.user.username, item);
	}

	screenChangeHandler(toScreen) {
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

	onLogoutClick(e) {
		e.preventDefault();
		this.props.history.push('/')
	}

	render() {
		var currentScreen = this.state.screenMode
		if (currentScreen === 'inventory') {
			currentScreen = <Inventory currentInventory={this.state.inventory} onDelete={this.onDelete} />
		} else if (currentScreen === 'trash') {
			currentScreen = <Trash currentTrash={this.state.trash} />
		} else {
			currentScreen = <Shopping />
		}
		return (
			<div>
				<Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} />
				<Navigation switchScreenTo={this.screenChangeHandler} />
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
		removeItem: () => dispatch(removeItem())
	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainScreen));