import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../Store/store'
import { addUser, fetchUser } from "../../Actions/firebaseActions";
import LogIn from '../Presentation/LogIn/LogIn'
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

    onUpdateUser() {
        this.props.addUser("ReactTest2");
        this.props.fetchUser("Red");
    }

    render() {
        return (
            <div className="LogInScreen">
                {<Header />}
                {<LogIn />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

const mapActionsToProps = {
    addUser: addUser,
    fetchUser: fetchUser
}

export default connect(mapStateToProps, mapActionsToProps)(LogInScreen);
