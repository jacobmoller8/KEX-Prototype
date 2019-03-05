import React, { Component } from 'react'
import './Inventory.css';
import { Button, Table } from 'react-bootstrap';
import SuccessSnackbar from '../../MaterialComponents/Snackbars/SnackbarSucces'
import Search from '../Search/Search'
import { store } from '../../../Store/store'
export default class Inventory extends Component {

	render() {
		let filterValue = store.getState().firebase.filter
		var inventoryList = [];
		const { currentInventory } = this.props
		if (currentInventory !== undefined && currentInventory !== '[]') {
			if (filterValue === '' || filterValue === undefined) {
				for (let key in currentInventory) {
					inventoryList.push(
						<tr key={currentInventory[key].EANcode} onClick={() => this.props.onEditItemClick(currentInventory[key].EANcode)} >
							<td className="itemName" >{currentInventory[key].name}</td>
							<td className="quantity" >{currentInventory[key].quantity}</td>
							<td className="timeAdded d-none d-sm-table-cell" >{currentInventory[key].dates[0]}</td>
							<td className="comment d-none d-sm-table-cell" >{currentInventory[key].comment}</td>
							<td onClick={(e) => e.stopPropagation()}> <SuccessSnackbar onAddTo={this.props.onAddTo} itemToAdd={currentInventory[key]} comesFrom='inventory' actionStatus='move' /></td>
							<td onClick={(e) => e.stopPropagation()}> <Button className="delItemBtn" onClick={() => this.props.onDelete(currentInventory[key], 'inventory')}>  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
						</tr>)
				}
			} else {
				for (let key in currentInventory) {
					let itemName = currentInventory[key].name.toLowerCase()
					if (itemName.includes(filterValue)) {
						inventoryList.push(
							<tr key={currentInventory[key].EANcode} onClick={() => this.props.onEditItemClick(currentInventory[key].EANcode)} >
								<td className="itemName" >{currentInventory[key].name}</td>
								<td className="quantity" >{currentInventory[key].quantity}</td>
								<td className="timeAdded d-none d-sm-table-cell" >{currentInventory[key].dates[0]}</td>
								<td className="comment d-none d-sm-table-cell" >{currentInventory[key].comment}</td>
								<td onClick={(e) => e.stopPropagation()}> <SuccessSnackbar onAddTo={this.props.onAddTo} itemToAdd={currentInventory[key]} comesFrom='inventory' /></td>
								<td onClick={(e) => e.stopPropagation()}> <Button className="delItemBtn" onClick={() => this.props.onDelete(currentInventory[key], 'inventory')}>  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
							</tr>)
					}
				}
			}
		} else { inventoryList = <tr><td>Empty</td><td>-</td><td>-</td><td>-</td><td className="d-none d-sm-table-cell">-</td><td className="d-none d-sm-table-cell">-</td></tr> }

		return (
			<div className="row">
				<div className="container-fluid col-lg-10 col-md-10 col-sm-11 inventoryBody">
					<h3 className="title">My Inventory:</h3>
					<Search onSearch={this.props.onSearch} />
					<Table striped hover responsive className="inventoryTable">
						<thead>
							<tr>
								<th>Name</th>
								<th>Qty</th>
								<th className="d-none d-sm-table-cell">Added:</th>
								<th className="d-none d-sm-table-cell">Comment:</th>
								<th>Add</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{inventoryList}
						</tbody>
					</Table>
					<div className="container-fluid offset-2 col-8 offset-sm-4 col-sm-4 addItemContainer">
						<Button className="addItemBtn" onClick={this.props.onAddNewItemClick}> <img className="icon" src={require('../../../Images/Icons/addItem.svg')} alt="shoppingIcon"></img> </Button>
						<h6>Add Item</h6>
					</div>
				</div>
			</div>
		)
	}
}
