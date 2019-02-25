import React, { Component } from 'react'
import './Inventory.css';
import { Button, Table } from 'react-bootstrap';
export default class Inventory extends Component {

	render() {
		var inventoryList = [];
		const { currentInventory } = this.props
		if (currentInventory !== undefined) {
			for (let key in currentInventory) {
				inventoryList.push(
					<tr key={currentInventory[key].EANcode}>
						<td className="itemName">{currentInventory[key].name}</td>
						<td className="timeAdded">{currentInventory[key].dates[0]}</td>
						<td className="comment d-none d-sm-block">{currentInventory[key].comment}</td>
						<td> <Button className="delItemBtn">  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
					</tr>)
			}
		} else {
			inventoryList =
				<tr>
					<td>Empty</td>
					<td>-</td>
					<td className="d-none d-sm-block">-</td>
					<td>-</td>
				</tr>
		}

		return (
			<div className="row">
				<div className="container-fluid col-10 col-sm-8 inventoryBody">
					<h3 className="title">My Inventory:</h3>
					<Table striped hover responsive className="inventoryTable">
						<thead>
							<tr>
								<th>Name:</th>
								<th>Added:</th>
								<th className="d-none d-sm-block">Comment:</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{inventoryList}
						</tbody>
					</Table>
					<div className="container-fluid offset-2 col-8 offset-sm-4 col-sm-4 addItemContainer">
						<Button className="addItemBtn">  <img className="icon" src={require('../../../Images/Icons/addItem.svg')} alt="shoppingIcon"></img> </Button>
						<h6>Add Item</h6>
					</div>
				</div>
			</div>
		)
	}
}
