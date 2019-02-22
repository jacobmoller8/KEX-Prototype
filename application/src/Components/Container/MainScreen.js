import React, { Component } from 'react'
import { connect } from "react-redux";
import store from '../../Store/store';
import Header from '../Presentation/Header/Header';
import Navigation from '../Presentation/Navigation/Navigation';
import Inventory from '../Presentation/Inventory/Inventory';

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        inventory: {items: [1234, 4124, 135224, 634576]},
        trash: store.getState().trash,
        shopping: store.getState().shopping
    }
}

  render() {
    return (
      <div>
        <Header isLoggedIn={true} />
        <Navigation />
        <Inventory currentInventory={this.state.inventory}/>
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