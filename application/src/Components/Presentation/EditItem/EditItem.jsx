import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './EditItem.css';

export default class EditItem extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container-fluid col-lg-6 col-md-6 col-sm-11 addItemBody text-center">
            <h3 className="title">Edit Item:</h3>
            <p id="EANcode"> EAN code: {this.props.EANValue} </p>

            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" id="nameInput" defaultValue={this.props.NameValue} onChange={this.props.updateNameValue}></input>
                <label>Comment:</label>
                <input type="text" className="form-control" id="commentInput" defaultValue={this.props.CommentValue} onChange={this.props.updateCommentValue}></input>
                <label>Quantity (Number):</label>
                <input type="text" className="form-control" id="quantityInput" defaultValue={this.props.QuantityValue} onChange={this.props.updateQuantityValue}></input>
              </div>
              
              <div className="row btnRow">
                <div className="container-fluid col-4 backBtnCont">
                  <Button className="btn goBackButton" type="submit" onClick={this.props.onGoBackClick}>  <img className="backIcon" src={require('../../../Images/Icons/back.svg')} alt="shoppingIcon"></img> </Button>
                  <p> Back </p>
                </div>
                <div className="container-fluid col-4 confirmBtnCont">
                  <Button className="btn confirmButton" type="submit" onClick={this.props.onConfirmItemClick}> <img className="addIcon" src={require('../../../Images/Icons/yes.svg')} alt="shoppingIcon"></img> </Button>
                  <p> Save </p>
                </div>
              </div>

            </form>

          </div>
        </div>

      </div>
    )
  }
}
