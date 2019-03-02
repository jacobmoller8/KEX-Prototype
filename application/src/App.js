import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LogInScreen from './Components/Container/LogInScreen';
import MainScreen from './Components/Container/MainScreen';
import AddItemScreen from './Components/Container/AddItemScreen';

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
          <Route exact path="/" render={() => <LogInScreen />} />
          <Route path="/MainScreen" render={() => <MainScreen />} />
          <Route path="/AddItemScreen" render={() => <AddItemScreen />} />
        </header>

      </div>
    );
  }
}

export default App;
