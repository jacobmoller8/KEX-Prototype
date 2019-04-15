import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../Presentation/Header/Header'
import { withRouter } from "react-router-dom";
import Register from "../Presentation/Register/Register";
import { userRegisterUserInput, userRegisterPassInput, userRegisterPass2Input } from "../../Actions/userActions";
import { tryRegisterNewUser, addUser } from "../../Actions/firebaseActions";


class RegisterScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            registerError: false,
            registerErrorText: ""
        }
    }

    onRegisterClick = (e) => {
        e.preventDefault()
        this.setState({
            registerError: false,
            registerErrorText: ""
        })
        this.usernameCheck()
    }

    usernameCheck = () => {
        this.props.tryRegisterNewUser(this.props.user.register_username)
        setTimeout(() => {
            try {
                console.log(this.props.firebase["username"])
                this.setState({
                    registerError: true,
                    registerErrorText: "This user already exists"
                })
            }
            catch (err) {
                this.passwordCheck()
            }
        }, 1000);
    }

    passwordCheck = () => {
        if (this.props.user["register_password"] === this.props.user["register_password2"] && this.props.user["register_password"] !== "") {
            this.addNewUser()
        }
        else {
            this.setState({
                registerError: true,
                registerErrorText: "Passwords are not equal"
            })
        }
    }
    addNewUser = () => {
        this.props.addUser(this.props.user["register_username"], this.props.user["register_password"])
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="RegisterScreen">
                <Header isLoggedIn={false} />

                <Register
                    onUserInput={(e) => this.props.userRegisterUserInput(e.target.value)}
                    onPassInput={(e) => this.props.userRegisterPassInput(e.target.value)}
                    onPassInput2={(e) => this.props.userRegisterPass2Input(e.target.value)}
                    onRegisterClick={this.onRegisterClick}
                    registerError={this.state.registerError}
                    registerErrorText={this.state.registerErrorText} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    firebase: state.firebase
});

const mapActionsToProps = {
    userRegisterUserInput: userRegisterUserInput,
    userRegisterPassInput: userRegisterPassInput,
    userRegisterPass2Input: userRegisterPass2Input,
    tryRegisterNewUser: tryRegisterNewUser,
    addUser: addUser

}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(RegisterScreen));