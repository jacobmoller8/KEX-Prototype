import React, { Component } from 'react'
import './Inventory.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default class Inventory extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Link to="/">
					<button className="btn btn-primary">Back</button>
				</Link>
			</div>
		)
	}
}
