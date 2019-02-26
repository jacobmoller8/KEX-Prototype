import React, { Component } from 'react'
import './Navigation.css';
import { Button } from 'react-bootstrap'

const pressedStyle = ({
	borderColor: '#75AC4A',
	backgroundColor: '#75AC4A',
	transform: 'scale(1.25, 1.25)'
})

export default class Navigation extends Component {
	render() {
		let shoppingBtn = <Button className="roundBtn" id="shoppingBtn" onClick={() => { this.props.switchScreenTo('shopping') }}>  <img className="icon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button>
		let inventoryBtn = <Button className="roundBtn" id="inventoryBtn" onClick={() => { this.props.switchScreenTo('inventory') }}>  <img className="icon" src={require('../../../Images/Icons/Inventory.svg')} alt="shoppingIcon"></img> </Button>
		let trashBtn = <Button className="roundBtn" id="trashBtn" onClick={() => { this.props.switchScreenTo('trash') }}>  <img className="icon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button>

		if (this.props.currentScreen === 'inventory') {
			inventoryBtn = <Button className="roundBtn" id="inventoryBtn" style={pressedStyle} onClick={() => { this.props.switchScreenTo('inventory') }}>  <img className="icon" src={require('../../../Images/Icons/Inventory.svg')} alt="shoppingIcon"></img> </Button>
		} else if (this.props.currentScreen === 'shopping') {
			shoppingBtn = <Button className="roundBtn" id="shoppingBtn" style={pressedStyle} onClick={() => { this.props.switchScreenTo('shopping') }}>  <img className="icon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button>
		} else {
			trashBtn = <Button className="roundBtn" id="trashBtn" style={pressedStyle} onClick={() => { this.props.switchScreenTo('trash') }}>  <img className="icon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button>
		}

		return (
			<div className="row navRow">
				<div className="container-fluid offset-1 col-10 offset-md-3 col-md-6 navBar">
					<div className="row">
						<div className="container-fluid col-4 btnContainer">
							{shoppingBtn}
						</div>
						<div className="container-fluid col-4 btnContainer">
							{inventoryBtn}
						</div>
						<div className="container-fluid col-4 btnContainer">
							{trashBtn}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
