import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './AddItem.css';
import SearchBoxAPI from '../SearchBoxAPI/SearchBoxAPI'

export default class AddItem extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container-fluid col-lg-6 col-md-6 col-sm-11 addItemBody text-center">
            <h3 className="title">Add Item:</h3>

            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" id="nameInput" value={this.props.NameValue} onChange={this.props.updateNameValue}></input>
                <label>Comment:</label>
                <input type="text" className="form-control" id="commentInput" value={this.props.CommentValue} onChange={this.props.updateCommentValue}></input>
                <label>Quantity (Number):</label>
                <input type="text" className="form-control" id="quantityInput" value={this.props.QuantityValue} onChange={this.props.updateQuantityValue}></input>
              </div>
              <div className="row btnRow">
                <div className="container-fluid col-4 backBtnCont">
                  <Button className="btn goBackButton" type="submit" onClick={this.props.onGoBackClick}>  <img className="backIcon" src={require('../../../Images/Icons/back.svg')} alt="shoppingIcon"></img> </Button>
                  <p> Back </p>
                </div>
                <div className="container-fluid col-4 addBtnCont">
                  <Button className="btn confirmButton" type="submit" onClick={this.props.onAddItemClick}> <img className="addIcon" src={require('../../../Images/Icons/yes.svg')} alt="shoppingIcon"></img> </Button>
                  <p> Add </p>
                </div>
              </div>
            </form>
						<SearchBoxAPI onApiSearch={this.props.onApiSearch} valueHandler={this.props.EANSearchValue} changeHandler={this.props.updateEANSearchValue}/>

          </div>
        </div>

      </div>
    )
  }
}
