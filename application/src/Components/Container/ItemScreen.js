import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import AddItem from '../Presentation/AddItem/AddItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ItemScreen extends Component {

  constructor(props) {
    super(props)

    this.onLogoutClick = this.onLogoutClick.bind(this);

  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} />
        <AddItem></AddItem>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    firebase: state.firebase,
    inventory: state.firebase.inventory,
    trash: state.firebase.trash,
    shopping: state.firebase.shopping,
    screenMode: state.mainScreen.mainScreenMode
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemScreen));
