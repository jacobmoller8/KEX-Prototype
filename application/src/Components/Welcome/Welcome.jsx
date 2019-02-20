import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                {<Header/>}

                <div className="row justify-content-center" >
                    <div className="col-md-4 col-sm-10 text-center">

                        <div id="signInContainer">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JohnnyCool"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password:</label>
                                    <input type="password" className="form-control" id="InputPassword" placeholder="*******"></input>
                                </div>
                                <Link to="/Inventory">
																	<button type="submit" className="btn btn-warning">Sign In</button>
																</Link>
                            </form>
                        </div>

                        <p id="registerText">Haven't got an account?</p>
                        <button type="submit" className="btn btn-warning">Register</button>

                    </div>


                </div>


            </div>
        );
    }
}

export default Welcome;
