import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../Store/store'
import { addUser, fetchUser, tryLoginUser } from "../../Actions/firebaseActions";
import { userLoginUserInput, userLoginPassInput } from "../../Actions/userActions";
import { LogIn } from '../Presentation/LogIn/LogIn'
import Header from '../Presentation/Header/Header'
import { withRouter } from "react-router-dom";


class LogInScreen extends Component {

    _isMounted = false;

    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this);

        //For later not used
        this.state = {
            username: "",
            password: "",
        }
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

    onLoginClick(e) {
        e.preventDefault();
        this.props.tryLoginUser(this.props.user["username"])
        setTimeout(() => {
            this.loginControlCheck();
        }, 2000);
    }
    loginControlCheck() {
        if (this.props.user["username"] === this.props.firebase["username"] &&
            this.props.user["password"] === this.props.firebase["password"]) {
            console.log("reached")
            this.props.history.push('/MainScreen')
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
    firebase: state.firebase

});

const mapActionsToProps = {
    addUser: addUser,
    fetchUser: fetchUser,
    tryLoginUser: tryLoginUser,
    userLoginUserInput: userLoginUserInput,
    userLoginPassInput: userLoginPassInput

}

export default  withRouter(connect(mapStateToProps, mapActionsToProps)(LogInScreen));
