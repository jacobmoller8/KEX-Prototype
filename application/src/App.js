import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Welcome from './Components/Welcome/Welcome';
import Inventory from './Components/Inventory/Inventory'

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
          <Route exact path="/" render={() => <Welcome />} />
          <Route path="/inventory" render={() => <Inventory />} />
        </header>

      </div>
    );
  }
}

export default App;
