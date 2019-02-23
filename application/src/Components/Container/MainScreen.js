import React, { Component } from 'react'
import { connect } from "react-redux";
import Header from '../Presentation/Header/Header';
import Navigation from '../Presentation/Navigation/Navigation';
import Inventory from '../Presentation/Inventory/Inventory';
import Trash from '../Presentation/Trash/Trash';
import Shopping from '../Presentation/Shopping/Shopping';

import { setInventory, setTrash, setShopping } from '../../Actions/mainScreenActions'

class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.screenChangeHandler = this.screenChangeHandler.bind(this)

		this.state = {
			inventory: '',
			trash: '',
			shopping: '',
			screenMode: 'inventory'
		}
	}

	screenChangeHandler(toScreen){
		if (toScreen === 'inventory'){
			this.props.setInventory();
		}else if (toScreen === 'trash'){
			this.props.setTrash();
		}else{
			this.props.setShopping();
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		this.setState({
			inventory: nextProps.inventory,
			trash: nextProps.trash,
			shopping: nextProps.shopping,
			screenMode: nextProps.screenMode
		})
	}

	render() {
		console.log(this.state.screenMode)

		var currentScreen = this.state.screenMode
		if (currentScreen === 'inventory'){
			currentScreen = <Inventory currentInventory={this.state.inventory} />
		}else if (currentScreen === 'trash'){
			currentScreen = <Trash />
		}else{
			currentScreen = <Shopping />
		}
		return (
			<div>
				<Header isLoggedIn={true} />
				<Navigation switchScreenTo={this.screenChangeHandler} />
				{currentScreen}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		inventory: state.inventory,
		trash: state.trash,
		shopping: state.shopping,
		screenMode: state.mainScreen.mainScreenMode
	}
};

const mapDispatchToProps = dispatch => {
	return {
		setInventory: () => dispatch(setInventory('inventory')),
		setShopping: () => dispatch(setShopping('shopping')),
		setTrash: () => dispatch(setTrash('trash'))
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);