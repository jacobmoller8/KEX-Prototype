import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <div className="container-fluid" id="header">
                    <h1>Food Inventory App</h1>
                </div>

                <div className="row justify-content-center" >
                    <div className="col-md-4 col-sm-10 text-center">

                        <div id="signInContainer">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </form>
                        </div>

                        <p id="registerText">Haven't got an account?</p>
                        <button type="submit" className="btn btn-primary">Register</button>

                    </div>


                </div>




            </div>
        );
    }
}

export default Welcome;
