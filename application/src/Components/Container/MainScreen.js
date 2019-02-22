import React, { Component } from 'react'
import { connect } from "react-redux";
import store from '../../Store/store';
import Header from '../Presentation/Header/Header';
import Navigation from '../Presentation/Navigation/Navigation';

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        inventory: store.getState().inventory,
        trash: store.getState().trash,
        shopping: store.getState().shopping
    }
}

  render() {
    return (
      <div>
        <Header />
        <Navigation />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inventory: state.inventory,
  trash: state.trash,
  shopping: state.shopping,
});


export default connect(mapStateToProps)(MainScreen);