import React, { Component } from 'react'
import './Header.css';
import { Button } from 'react-bootstrap'

export default class Header extends Component {

	render() {
		return (
			<div>
				<div className="container-fluid header">
					<Button variant="warning" className="signOutBtn" onClick={() => console.log("hello")}>Log out</Button>
					<h1>Food Inventory App</h1>
				</div>
				<div className="arch"></div>
				<div className="container-fluid profileIconHolder">
					<img src={require('../../../Images/carrot4.png')} className="profileIcon" alt="loginIcon" />
				</div>
			</div>

		)
	}
}
