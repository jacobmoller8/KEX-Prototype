import React, { Component } from 'react'
import './Header.css';
import { Button } from 'react-bootstrap'

export default class Header extends Component {
	constructor(props) {
		super(props)

		this.ifLoggedIn = this.ifLoggedIn.bind(this)
	}


	ifLoggedIn() {
		const { isLoggedIn } = this.props
		var btnDisplay = '';

		if (isLoggedIn) {
			btnDisplay = { display: 'block' };
		} else {
			btnDisplay = { display: 'none' };
		}

		return btnDisplay

	}

	render() {

		return (
			<div className="row">
				<div className="container-fluid header">
					<Button variant="warning" className="signOutBtn" onClick={() => console.log("hello")} style={this.ifLoggedIn()}>Log out</Button>
				</div>
				<div className="arch"/>
				<div className="container-fluid col-8 offset-2 offset-sm-4 col-sm-4 profileBtnContainer">
					<Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/carrot4.png')} alt="shoppingIcon"></img> </Button>
				</div>

			</div>

		)
	}
}