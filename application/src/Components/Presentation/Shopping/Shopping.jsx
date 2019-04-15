import React, { Component } from 'react'
import './Shopping.css';
import { Button, Table } from 'react-bootstrap';
import FancyCheckbox from '../../MaterialComponents/Material-Checkbox/Checkbox'
import Search from '../Search/Search'
import { store } from '../../../Store/store'
import { DragDropContainer } from 'react-drag-drop-container';
import DndTrash from '../DragNDropTrashBin/DndTrash'
import Paper from '@material-ui/core/Paper';


export default class Shopping extends Component {


	render() {
		let filterValue = store.getState().firebase.filter
		var shoppingList = [];
		const { currentShopping } = this.props
		let checkStyle = ({ color: 'grey' })

		if (currentShopping !== undefined && currentShopping !== '[]') {
			if (filterValue === '' || filterValue === undefined) {
				for (let key in currentShopping) {
					if (currentShopping[key].checked) {
						checkStyle = ({ color: 'grey', textDecoration: 'line-through' })
					}
					else (checkStyle = ({ color: 'black' }))
					try {
						shoppingList.push(

							<tr key={currentShopping[key].EANcode} style={checkStyle}>
								<td className="itemName" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].name}</td>
								<td className="quantity" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].quantity}</td>
								<td className="timeAdded d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].dates[0]}</td>
								<td className="comment d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].comment}</td>
								<td> <FancyCheckbox currentItem={currentShopping[key]} handleCheck={this.props.handleCheck} /></td>
								<td> <DragDropContainer
									dragData={{ label: currentShopping[key].name, id: currentShopping[key] }}
									targetKey="trashBin"
									onDragStart={(dragData) => this.props.onDragStart(dragData)}
									onDragEnd={(dragData, currentTarget) => this.props.onDragEnd(dragData, currentTarget)}
									onDrop={(dragData, dropTarget) => this.props.onDragDropped(dragData, dropTarget)}> <Button className="delItemBtn" onClick={this.props.onDragEnd} >  <img className="tableIcon" src={require('../../../Images/Icons/touchIcon.svg')} alt="shoppingIcon"></img> </Button> </DragDropContainer></td>
							</tr>)
					}
					catch (error) {
						console.log(error)
					}
				}
			} else {
				for (let key in currentShopping) {
					if (currentShopping[key].checked) {
						checkStyle = ({ color: 'grey', textDecoration: 'line-through' })
					}
					else (checkStyle = ({ color: 'black' }))
					let itemName = currentShopping[key].name.toLowerCase()
					if (itemName.includes(filterValue)) {
						try {
							shoppingList.push(
								<tr key={currentShopping[key].EANcode} style={checkStyle}>
									<td className="itemName" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].name}</td>
									<td className="quantity" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].quantity}</td>
									<td className="timeAdded d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].dates[0]}</td>
									<td className="comment d-none d-sm-table-cell" onClick={() => this.props.onEditItemClick(currentShopping[key].EANcode)}>{currentShopping[key].comment}</td>
									<td> <FancyCheckbox currentItem={currentShopping[key]} handleCheck={this.props.handleCheck} /></td>
									<td> <DragDropContainer
										dragData={{ label: currentShopping[key].name, id: currentShopping[key] }}
										targetKey="trashBin"
										onDragStart={(dragData) => this.props.onDragEnter(dragData)}
										onDragEnd={(dragData, currentTarget) => this.props.onDragLeave(dragData, currentTarget)}
										onDrop={(dragData, dropTarget) => this.props.onDragDropped(dragData, dropTarget)}> <Button className="delItemBtn" onClick={this.props.onDragEnd}>  <img className="tableIcon" src={require('../../../Images/Icons/touchIcon.svg')} alt="shoppingIcon"></img> </Button> </DragDropContainer></td>
								</tr>)
						}
						catch (error) {
							console.log(error)
						}
					}
				}
			}
		}
		else { shoppingList = <tr><td>Empty</td><td>-</td><td>-</td><td>-</td><td className="d-none d-sm-table-cell">-</td><td className="d-none d-sm-table-cell">-</td></tr> }


		return (
			<div className="row">
				<Paper className="container-fluid col-lg-10 col-md-10 col-sm-11 shoppingBody" elevation={6} square>
					<h3 className="title">My Shopping List</h3>
					<DndTrash
						onEnter={this.props.onDropZoneEntered}
						onLeave={this.props.onDropZoneExited}
						onDrop={this.props.onDragDropped}
						overDropZone={this.props.overDropZone}
						dragging={this.props.dragging} />
					<Search onSearch={this.props.onSearch} />

					<Table striped hover responsive className="shoppingTable">
						<thead>
							<tr>
								<th>Name</th>
								<th>Qty</th>
								<th className="d-none d-sm-table-cell">Added</th>
								<th className="d-none d-sm-table-cell">Comment</th>
								<th>Check</th>
								<th>Drag</th>
							</tr>
						</thead>
						<tbody>
							{shoppingList}
						</tbody>
					</Table>
					<div className="container-fluid offset-2 col-8 offset-sm-4 col-sm-4 addItemContainer">
						<Button className="addItemBtn" onClick={this.props.onAddNewItemClick}>  <img className="icon" src={require('../../../Images/Icons/addItem.svg')} alt="shoppingIcon"></img> </Button>
						<h6>Add Item</h6>
					</div>
				</Paper>
			</div>
		)
	}
}
