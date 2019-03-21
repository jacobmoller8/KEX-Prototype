import React, { Component } from 'react'
import './Header.css';
import { Button } from 'react-bootstrap'


let btnDisplay = {display: 'none'}
let logoDisplay = {display: 'block'}
export default class Header extends Component {

	render() {
		if (this.props.isLoggedIn) {
			btnDisplay = { display: 'block' };
			logoDisplay = { display: 'none'};
		} else {
			btnDisplay = { display: 'none' };
			logoDisplay = { display: 'block'};
		}


		let profileIcon = null
		let logo = <div className="container-fluid col-8 offset-2 offset-md-4 col-md-4 logoContainer" style={logoDisplay}> <img className="logo" src={require('../../../Images/logo.svg')} alt="logo"></img></div>
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
		}else if(this.props.currentUser === 'addItem'){
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/HeaderAddIcon.svg')} alt="shoppingIcon"></img> </Button>
		}
		
		return (
			<div className="row">
				<div className="container-fluid header">
					<Button variant="warning" className="signOutBtn" onClick={this.props.onLogoutClick} style={btnDisplay}>Log out</Button>
				</div>
				<div className="arch" />
					{logo}
				<div className="container-fluid col-8 offset-2 offset-sm-4 col-sm-4 profileBtnContainer">
					{profileIcon}
				</div>

			</div>

		)
	}
}