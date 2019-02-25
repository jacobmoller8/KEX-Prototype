import React, { Component } from 'react'
import './Shopping.css';
import { Button, Table } from 'react-bootstrap';

export default class Shopping extends Component {

  render() {
    var shoppingList = [];
    const { currentShopping } = this.props
    if (currentShopping !== undefined) {
      for (let key in currentShopping) {
        shoppingList.push(
          <tr key={currentShopping[key].EANcode}>
            <td className="itemName">{currentShopping[key].name}</td>
            <td className="quantity">{currentShopping[key].quantity}</td>
            <td className="timeAdded d-none d-sm-table-cell">{currentShopping[key].dates[0]}</td>
            <td className="comment d-none d-sm-table-cell">{currentShopping[key].comment}</td>
            <td> <Button className="addShoppingItemBtn">  <img className="tableIcon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button></td>
            <td> <Button className="delItemBtn">  <img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="shoppingIcon"></img> </Button></td>
          </tr>)
      }
    } else { shoppingList = <tr><td>Empty</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> }

    return (
      <div className="row">
        <div className="container-fluid col-lg-10 col-md-10 col-sm-11 shoppingBody">
          <h3 className="title">My Shopping List:</h3>
          <Table striped hover responsive className="shoppinhTable">
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
              {shoppingList}
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
