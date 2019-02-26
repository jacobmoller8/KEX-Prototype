import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import AddItem from '../Presentation/AddItem/AddItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCustomItemToShopping, addCustomItemToInventory } from '../../Actions/addCustomItemActions';


class ItemScreen extends Component {

  constructor(props) {
    super(props)

    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onAddItemClick = this.onAddItemClick.bind(this);
    this.onGoBackClick = this.onGoBackClick.bind(this);
    this.updateNameValue = this.updateNameValue.bind(this);
    this.updateCommentValue = this.updateCommentValue.bind(this);
    this.updateQuantityValue = this.updateQuantityValue.bind(this);

    this.state = {
      name: "",
      comment: "",
      quantity: ""
    }

  }

  onAddItemClick(e) {
    e.preventDefault();
    if (this.props.screenMode === "inventory") {
      addCustomItemToInventory(this.props.firebase.username, this.state.name, this.state.comment, this.state.quantity)
      this.resetState()
    }
    if (this.props.screenMode === "shopping") {
      addCustomItemToShopping(this.props.firebase.username, this.state.name, this.state.comment, this.state.quantity)
      this.resetState()
    }
  }

  resetState() {
    this.setState({
      name: "",
      comment: "",
      quantity: ""
    })
  }

  updateNameValue(input) {
    this.setState({
      name: input
    })
  }
  updateCommentValue(input) {
    this.setState({
      comment: input
    })
  }
  updateQuantityValue(input) {
    this.setState({
      quantity: input
    })
  }

  onGoBackClick(e) {
    e.preventDefault();
    this.props.history.push('/MainScreen');
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} />
        <AddItem
          onAddItemClick={this.onAddItemClick}
          onGoBackClick={this.onGoBackClick}
          NameValue={this.state.name}
          CommentValue={this.state.comment}
          QuantityValue={this.state.quantity}
          updateNameValue={(e) => this.updateNameValue(e.target.value)}
          updateCommentValue={(e) => this.updateCommentValue(e.target.value)}
          updateQuantityValue={(e) => this.updateQuantityValue(e.target.value)} ></AddItem>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    firebase: state.firebase,
    screenMode: state.mainScreen.mainScreenMode
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCustomItemToShopping: () => dispatch(addCustomItemToShopping()),
    addCustomItemToInventory: () => dispatch(addCustomItemToInventory())
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemScreen));
