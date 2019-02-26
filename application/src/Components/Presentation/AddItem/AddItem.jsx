import React, { Component } from 'react'
import './AddItem.css';

export default class AddItem extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container-fluid col-lg-6 col-md-6 col-sm-11 addItemBody text-center">
            <h3 className="title">Add Item:</h3>

            <form>
              <div className="form-group">
                <label htmlFor="itemNameLabel">Name:</label>
                <input type="text" className="form-control" id="nameInput" onChange={console.log("click")}></input>
                <label htmlFor="commentLabel">Comment:</label>
                <input type="text" className="form-control" id="commentInput" onChange={console.log("click")}></input>
                <label htmlFor="quantityLabel">Quantity (Number):</label>
                <input type="text" className="form-control" id="quantityInput" onChange={console.log("click")}></input>
              </div>
              <button onClick={this.props.onGoBackClick} type="submit" className="btn btn-danger">Go Back</button>
              <button onClick={this.props.onAddItemClick} type="submit" className="btn btn-success">Add Item</button>

            </form>

          </div>
        </div>

      </div>
    )
  }
}
