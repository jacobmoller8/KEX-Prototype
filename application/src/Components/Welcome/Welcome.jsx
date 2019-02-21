import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { connect } from "react-redux";
import store from "../../Store/store";
import { addUser, fetchUser } from "../../Actions/firebaseActions";


class Welcome extends Component {

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
            <div className="Welcome">
                {<Header />}

                <div className="row justify-content-center" >
                    <div className="col-md-4 col-sm-10 text-center">

                        <div id="signInContainer">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JohnnyCool"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password:</label>
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

const mapStateToProps = state => ({
    user: state.user,
});

const mapActionsToProps = {
    addUser: addUser,
    fetchUser: fetchUser
}

export default connect(mapStateToProps, mapActionsToProps)(Welcome);
