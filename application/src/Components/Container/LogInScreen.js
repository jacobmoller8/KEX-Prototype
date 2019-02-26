import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser, tryLoginUser } from "../../Actions/firebaseActions";
import { userLoginUserInput, userLoginPassInput } from "../../Actions/userActions";
import LogIn from '../Presentation/LogIn/LogIn'
import Header from '../Presentation/Header/Header'
import { withRouter } from "react-router-dom";


class LogInScreen extends Component {

    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e) {
        e.preventDefault();
        this.props.tryLoginUser(this.props.user["username"])
        setTimeout(() => {
            this.loginControlCheck();
        }, 1000);
    }
    loginControlCheck() {
        try {
            if (this.props.user["username"] === this.props.firebase["username"] &&
                this.props.user["password"] === this.props.firebase["password"]) {
                this.props.history.push('/MainScreen')

            } else {
                console.log("this.props.user: " + this.props.user["username"] + " this.props.password: " + this.props.user["password"] +
                    " this.props.firebase.user: " + this.props.firebase["username"] + "this.firebase.pw: " + this.props.firebase["password"])
            }
        }
        catch {
            console.log("Wrong username or password")
        }
    }

    render() {
        return (
            <div className="LogInScreen">
                {<Header isLoggedIn={false} />}
                {<LogIn
                    onUserInput={(e) => this.props.userLoginUserInput(e.target.value)}
                    onPassInput={(e) => this.props.userLoginPassInput(e.target.value)}
                    onLoginClick={this.onLoginClick} />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    firebase: state.firebase,
    screenMode: state.mainScreen.mainScreenMode

});

const mapActionsToProps = {

    addUser: addUser,
    tryLoginUser: tryLoginUser,
    userLoginUserInput: userLoginUserInput,
    userLoginPassInput: userLoginPassInput,
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LogInScreen));


/*
        this.state = {
            username: "",
            password: "",
        }

componentDidMount() {
    this._isMounted = true;

    //For later not used
    store.subscribe(() => {
        if (this._isMounted) {
            this.setState({
                user: store.getState().user
            });
        }
    });
}

componentWillUnmount() {
    this._isMounted = false;
}
*/