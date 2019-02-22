import React, { Component } from 'react'
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className="container-fluid offset-2 col-8 offset-lg-3 col-lg-6 navBar">
        <div className="row">
          <div className="container-fluid col-4 btnContainer">
            <div className="container-fluid btnCircle">
              <span className="Centerer">
                <img className="icon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img>
              </span>
            </div>
          </div>
          <div className="container-fluid col-4 btnContainer">
            <div className="container-fluid btnCircle">
              <span className="Centerer">
                <img className="icon" src={require('../../../Images/Icons/Inventory.svg')} alt="InventoryIcon"></img>
              </span>
            </div>
          </div>
          <div className="container-fluid col-4 btnContainer">
            <div className="container-fluid btnCircle">
              <span className="Centerer">
                <img className="icon" src={require('../../../Images/Icons/delete.svg')} alt="TrashIcon"></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
