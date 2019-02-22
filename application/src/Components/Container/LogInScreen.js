import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../Store/store'
import { addUser, fetchUser, tryLoginUser } from "../../Actions/firebaseActions";
import { LogIn } from '../Presentation/LogIn/LogIn'
import Header from '../Presentation/Header/Header';


class LogInScreen extends Component {

    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            user: store.getState().user
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

    onClick(e, username, password) {
        e.preventDefault();
        console.log("hej")
        console.log(username)
        console.log(password)
        //this.props.tryLoginUser("Green", "Flamingo74")
    }

    onUpdateUser() {
        //this.props.addUser("ReactTest2");
        //this.props.fetchUser("Red");
        this.props.tryLoginUser("Green", "Flamingo74")
    }

    render() {
        return (
            <div className="LogInScreen">
                {<Header />}
                {<LogIn onClick={(e) => this.onClick(e, "username", "password")} />}
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
    tryLoginUser: tryLoginUser
}

export default connect(mapStateToProps, mapActionsToProps)(LogInScreen);
