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
						<td className="quantity">{currentInventory[key].quantity}</td>
						<td className="timeAdded">{currentInventory[key].dates[0]}</td>
						<td className="comment">{currentInventory[key].comment}</td>
						<td> <Button className="addShoppingItemBtn">  <img className="tableIcon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button></td>
						<td> <Button className="delItemBtn">  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
					</tr>)
			}
		} else { inventoryList = <tr><td>Empty</td><td>-</td><td>-</td><td>-</td></tr> }

		return (
			<div className="row">
				<div className="container-fluid col-lg-6 col-md-10 col-sm-11 inventoryBody">
					<h3 className="title">My Inventory:</h3>
					<Table striped hover responsive>
						<thead>
							<tr>
								<th>Name:</th>
								<th>Qty:</th>
								<th>Added:</th>
								<th>Comment:</th>
								<th>Add</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{inventoryList}
						</tbody>
					</Table>
					<div className="container-fluid offset-2 col-8 offset-sm-4 col-sm-4 addItemContainer">
						<Button className="addItemBtn">  <img className="icon" src={require('../../../Images/Icons/yes.svg')} alt="shoppingIcon"></img> </Button>
						<h6>Add Item</h6>
					</div>
				</div>
			</div>
		)
	}
}
