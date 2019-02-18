import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';

import Welcome from './Welcome/Welcome';

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

      </div>
    );
  }
}

export default App;
