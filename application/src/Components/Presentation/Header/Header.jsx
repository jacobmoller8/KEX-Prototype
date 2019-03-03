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
		let profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/carrot5.png')} alt="shoppingIcon"></img> </Button>
		if (this.props.currentUser === "Red"){
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/RedProfile.svg')} alt="shoppingIcon"></img> </Button>
		}else if(this.props.currentUser === "Blue"){
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/BlueProfile.svg')} alt="shoppingIcon"></img> </Button>
		}else if(this.props.currentUser === "Yellow"){
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/YellowProfile.svg')} alt="shoppingIcon"></img> </Button>
		}else if(this.props.currentUser === "Green"){
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/GreenProfile.svg')} alt="shoppingIcon"></img> </Button>
		}else if(this.props.currentUser === 'editItem'){
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/HeaderEditIcon.svg')} alt="shoppingIcon"></img> </Button>
		}
		
		return (
			<div className="row">
				<div className="container-fluid header">
					<Button variant="warning" className="signOutBtn" onClick={this.props.onLogoutClick} style={this.ifLoggedIn()}>Log out</Button>
				</div>
				<div className="arch" />
				<div className="container-fluid col-8 offset-2 offset-sm-4 col-sm-4 profileBtnContainer">
					{profileIcon}
				</div>

			</div>

		)
	}
}