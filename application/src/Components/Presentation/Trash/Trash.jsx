import React, { Component } from 'react'
import './Trash.css';
import { Button, Table } from 'react-bootstrap';
import Search from '../Search/Search'
import SuccessSnackbar from '../../MaterialComponents/Snackbars/SnackbarSucces'
import { store } from '../../../Store/store'
import Paper from '@material-ui/core/Paper';
import ToggleListOrder from '../ToggleListOrder/ToggleListOrder'

export default class Trash extends Component {
	render() {

		this.addItemTolist = (key) => {
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

		let filterValue = store.getState().firebase.filter
		var trashList = [];
		const { currentTrash } = this.props

		if (currentTrash !== undefined && currentTrash !== '[]') {

			if (filterValue === '' || filterValue === undefined) {
				for (let key in currentTrash) {
					try {
						this.addItemTolist(key)
					}
					catch (error) {
						console.log(error)
					}
				}
			} else {
				for (let key in currentTrash) {
					let itemName = currentTrash[key].name.toLowerCase()
					if (itemName.includes(filterValue)) {
						try {
							this.addItemTolist(key)
						}
						catch (error) {
							console.log(error)
						}
					}
				}
			}
		} else { trashList = <tr><td>Empty</td><td>-</td><td>-</td><td>-</td><td className="d-none d-sm-table-cell">-</td><td className="d-none d-sm-table-cell">-</td></tr> }

		return (
			<div className="row">
				<Paper className="container-fluid col-lg-10 col-md-10 col-sm-11 trashBody" elevation={6} square>
					<h3 className="title">My Trash</h3>
					<div className="row">
						<ToggleListOrder />
						<Search onSearch={this.props.onSearch} />
					</div>
					<Table striped hover responsive className="trashTable">
						<thead>
							<tr>
								<th>Name</th>
								<th>Qty</th>
								<th className="d-none d-sm-table-cell">Added</th>
								<th className="d-none d-sm-table-cell">Comment</th>
								<th>Add</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{trashList}
						</tbody>
					</Table>
				</Paper>
			</div>
		)
	}
}
