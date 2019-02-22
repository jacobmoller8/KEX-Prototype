import React, { Component } from 'react'
import Header from '../Presentation/Header/Header'

export default class ItemScreen extends Component {
  render() {
    return (
      <div>
        <Header isLoggedIn={true}/>
      </div>
    )
  }
}
