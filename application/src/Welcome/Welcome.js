import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">

                <h1>Welcome to our amazing app</h1>

            </div>
        );
    }
}

export default Welcome;
