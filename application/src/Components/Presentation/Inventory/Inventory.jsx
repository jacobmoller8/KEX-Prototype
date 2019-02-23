import React, { Component } from 'react'
import './Inventory.css';
import { Button, Table } from 'react-bootstrap';

export default class Inventory extends Component {

  render() {
    var inventoryList = [];
    const { currentInventory } = this.props
    currentInventory.items.map((item, key) => {
      inventoryList.push(<tr key={key}>

        <td className="itemName">{item}</td>
        <td className="timeAdded">today</td>
        <td className="comment">good</td>
        <td> <Button className="delItemBtn">  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
			</tr>)
			return inventoryList
    })

    return (
      <div className="row">	
        <div className="container-fluid col-10 col-sm-8 inventoryBody">
          <h3 className="title">My Inventory:</h3>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Name:</th>
                <th>Added:</th>
                <th>Comment:</th>
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
