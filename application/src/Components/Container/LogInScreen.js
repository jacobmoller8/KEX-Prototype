import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../Store/store'
import { addUser, fetchUser, tryLoginUser } from "../../Actions/firebaseActions";
import { userLoginUserInput, userLoginPassInput } from "../../Actions/userActions";
import { LogIn } from '../Presentation/LogIn/LogIn'
import Header from '../Presentation/Header/Header';


class LogInScreen extends Component {

    _isMounted = false;

    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onUserInput = this.onUserInput.bind(this);
        this.onPassInput = this.onPassInput.bind(this);
        this.state = {
            username: "",
            password: "",
        }
    }

    componentDidMount() {
        this._isMounted = true;

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
    onUserInput(evt) {
        this.setState({
            username: evt.target.value
        })
    }
    onPassInput(evt) {
        this.setState({
            password: evt.target.value
        })
    }
    onLoginClick(e) {
        e.preventDefault();
        this.props.tryLoginUser(this.state.username, this.state.password)
        setTimeout(console.log(store.getState().firebase), 2000);
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

});

const mapActionsToProps = {
    addUser: addUser,
    fetchUser: fetchUser,
    tryLoginUser: tryLoginUser,
    userLoginUserInput: userLoginUserInput,
    userLoginPassInput: userLoginPassInput

}

export default connect(mapStateToProps, mapActionsToProps)(LogInScreen);
