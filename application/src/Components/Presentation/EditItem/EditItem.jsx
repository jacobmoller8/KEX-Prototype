import React, { Component } from 'react'
import './EditItem.css';

export default class EditItem extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container-fluid col-lg-6 col-md-6 col-sm-11 addItemBody text-center">
            <h3 className="title">Edit Item:</h3>

            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" id="nameInput" defaultValue={this.props.NameValue} onChange={this.props.updateNameValue}></input>
                <label>Comment:</label>
                <input type="text" className="form-control" id="commentInput" defaultValue={this.props.CommentValue} onChange={this.props.updateCommentValue}></input>
                <label>Quantity (Number):</label>
                <input type="text" className="form-control" id="quantityInput" defaultValue={this.props.QuantityValue} onChange={this.props.updateQuantityValue}></input>
              </div>
              <button onClick={this.props.onGoBackClick} type="submit" className="btn goBackButton">Go Back</button>
              <button onClick={this.props.onConfirmItemClick} type="submit" className="btn confirmButton">Confirm</button>

            </form>

          </div>
        </div>

      </div>
    )
  }
}
