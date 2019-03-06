import React, { Component } from 'react';
import './ItemFeedbackBox.css';


export default class ItemFeedBackBox extends Component {

    render() {

        if (this.props.status === "error") {
            var icon = <img className="icon" src={require('../../../Images/Icons/NoRed.svg')} alt="icon"></img>
            var text = <p id="text" className="align-self-center"> {this.props.message} </p>
        }
        if (this.props.status === "accept") {
            icon = <img className="icon" src={require('../../../Images/Icons/yes.svg')} alt="icon"></img>
            text = <p id="text" className="align-self-center"> {this.props.message} </p>
        }

        return (
            <div id="itemFeedbackBox">
                <div className="container-fluid message">
                    <div className="row justify-content-center align-items-center">
                        {icon}
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}
