import React, { Component } from 'react';
import './Register.css';
import RegisterError from "../RegisterError/RegisterError";
import { Button } from 'react-bootstrap';

export default class Register extends Component {


    render() {
        let errorBox = <span id="noError"></span>
        if (this.props.registerError) {
            errorBox = <RegisterError registerErrorText={this.props.registerErrorText} />
        }

        return (
            <div>
                <div className="row justify-content-center" >
                    <div className="col-lg-6 col-md-10 col-sm-10 text-center">

                        <div id="registerContainer">
                            <form>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onBlur={this.props.onUserInput}></input>
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" id="InputPassword" placeholder="********" onBlur={this.props.onPassInput}></input>
                                </div>
                                <div className="form-group">
                                    <label>Re-enter Password:</label>
                                    <input type="password" className="form-control" id="InputPassword2" placeholder="********" onBlur={this.props.onPassInput2}></input>
                                </div>
                                {errorBox}
                                <br />
                                <div className="row btnRow">
                                    <div className="container-fluid col-4 backBtnCont">
                                        <Button className="btn goBackButton" onClick={this.props.onGoBackClick}>  <img className="backIcon" src={require('../../../Images/Icons/back.svg')} alt="shoppingIcon"></img> </Button>
                                        <p>Back</p>
                                    </div>
                                    <div className="container-fluid col-4 addBtnCont">
                                        <Button className="btn confirmButton" type="submit" onClick={this.props.onRegisterClick}> <img className="addIcon" src={require('../../../Images/Icons/yes.svg')} alt="shoppingIcon"></img> </Button>
                                        <p>Register</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

