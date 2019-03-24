import React, { Component } from 'react'
import './Header.css';
import { Button } from 'react-bootstrap'
import VideoDialog from '../../MaterialComponents/Dialogs/VideoDialog'


export default class Header extends Component {

	render() {

		let btnDisplay = { display: 'none' }
		let logoDisplay = { display: 'block' }
		let profileDisplay = { display: 'none' }
		let feedbackBtn = <Button className="funcBtn" onClick={this.props.onFeedBackClick}><img className="btnImage" src={require('../../../Images/Icons/FeedBackIcon.svg')} alt="shoppingIcon"></img></Button>

		if (this.props.isLoggedIn) {
			btnDisplay = { display: 'block' };
			logoDisplay = { display: 'none' };
			profileDisplay = { display: 'inline-block' }
		} else {
			btnDisplay = { display: 'none' };
			logoDisplay = { display: 'block' };
			profileDisplay = { display: 'none' }
			feedbackBtn = null;
		}


		let profileIcon = <Button className="profileBtn" style={profileDisplay}>  <img className="profileImage" src={require('../../../Images/ProfileImages/carrot5.png')} alt="shoppingIcon"></img> </Button>
		let logo = <div className="container-fluid col-8 offset-2 offset-md-4 col-md-4 logoContainer" style={logoDisplay}> <img className="logo" src={require('../../../Images/logo.svg')} alt="logo"></img></div>;
		if (this.props.currentUser === "Red") {
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/RedProfile.svg')} alt="shoppingIcon"></img> </Button>
		} else if (this.props.currentUser === "Blue") {
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/BlueProfile.svg')} alt="shoppingIcon"></img> </Button>
		} else if (this.props.currentUser === "Yellow") {
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/YellowProfile.svg')} alt="shoppingIcon"></img> </Button>
		} else if (this.props.currentUser === "Green") {
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/GreenProfile.svg')} alt="shoppingIcon"></img> </Button>
		} else if (this.props.currentUser === 'editItem') {
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/HeaderEditIcon.svg')} alt="shoppingIcon"></img> </Button>
		} else if (this.props.currentUser === 'addItem') {
			profileIcon = <Button className="profileBtn">  <img className="profileImage" src={require('../../../Images/ProfileImages/HeaderAddIcon.svg')} alt="shoppingIcon"></img> </Button>
		}

		return (
			<div className="row">
				<div className="container-fluid header">
					<VideoDialog/>
					{feedbackBtn}
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