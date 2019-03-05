import React, { Component } from 'react'
import './Trash.css';
import { Button, Table } from 'react-bootstrap';
import Search from '../Search/Search'
import SuccessSnackbar from '../../MaterialComponents/Snackbars/SnackbarSucces'
import { store } from '../../../Store/store'

export default class Trash extends Component {
	render() {
		let filterValue = store.getState().firebase.filter
		var trashList = [];
		const { currentTrash } = this.props

		if (currentTrash !== undefined && currentTrash !== '[]') {

			if (filterValue === '' || filterValue === undefined) {
				for (let key in currentTrash) {
					trashList.push(
						<tr key={currentTrash[key].EANcode}>
							<td className="itemName" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].name}</td>
							<td className="quantity" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].quantity}</td>
							<td className="timeAdded d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].dates[0]}</td>
							<td className="comment d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].comment}</td>
							<td> <SuccessSnackbar onAddTo={this.props.onAddTo} itemToAdd={currentTrash[key]} comesFrom='trash' actionStatus='move' /></td>
							<td> <Button className="delItemBtn" onClick={() => this.props.onDelete(currentTrash[key], 'trash')}>  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
						</tr>)
				}
			} else {
				for (let key in currentTrash) {
					let itemName = currentTrash[key].name.toLowerCase()
					if (itemName.includes(filterValue)) {
						trashList.push(
							<tr key={currentTrash[key].EANcode}>
								<td className="itemName" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].name}</td>
								<td className="quantity" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].quantity}</td>
								<td className="timeAdded d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].dates[0]}</td>
								<td className="comment d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentTrash[key].EANcode)}>{currentTrash[key].comment}</td>
								<td> <Button className="addShoppingItemBtn" onClick={() => this.props.onAddTo(currentTrash[key], 'trash')}>  <img className="tableIcon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button></td>
								<td> <Button className="delItemBtn" onClick={() => this.props.onDelete(currentTrash[key], 'trash')}>  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
							</tr>)

					}
				}
			}
		} else { trashList = <tr><td>Empty</td><td>-</td><td>-</td><td>-</td><td className="d-none d-sm-table-cell">-</td><td className="d-none d-sm-table-cell">-</td></tr> }

		return (
			<div className="row">
				<div className="container-fluid col-lg-10 col-md-10 col-sm-11 trashBody">
					<h3 className="title">My Trash:</h3>
					<Search onSearch={this.props.onSearch} />
					<Table striped hover responsive className="trashTable">
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
							{trashList}
						</tbody>
					</Table>
				</div>
			</div>
		)
	}
}
