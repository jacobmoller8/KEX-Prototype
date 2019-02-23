import React, { Component } from 'react'
import './Navigation.css';
import { Button } from 'react-bootstrap'

export default class Navigation extends Component {
	render() {
		return (
			<div className="row navRow">
				<div className="container-fluid offset-1 col-10 offset-md-3 col-md-6 navBar">
					<div className="row">
						<div className="container-fluid col-4 btnContainer">
							<Button className="roundBtn">  <img className="icon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button>
						</div>
						<div className="container-fluid col-4 btnContainer">
							<Button className="roundBtn">  <img className="icon" src={require('../../../Images/Icons/Inventory.svg')} alt="shoppingIcon"></img> </Button>
						</div>
						<div className="container-fluid col-4 btnContainer">
							<Button className="roundBtn">  <img className="icon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
