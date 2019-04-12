import React, { Component } from 'react';
import './RegisterError.css'

export default class RegisterError extends Component {

    render() {

        return (
            <div id="registerErrorBox" >
                <div className="container-fluid errorMessage">
                    <div className="row justify-content-center align-items-center">
                        <img className="errIcon" src={require('../../../Images/Icons/NoRed.svg')} alt="errorIcon"></img>
                        <p id="errText" className="align-self-center"> {this.props.registerErrorText} </p>
                    </div>
                </div>
            </div>
        )
    }
}
