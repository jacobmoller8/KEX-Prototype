import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Welcome from './Welcome/Welcome';
import Inventory from './Inventory/Inventory'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'KEX Scanner Application',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Welcome} />
        </header>
				<Route exact path="/Inventory" component={Inventory} />

      </div>
    );
  }
}

export default App;
