import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import EditItem from '../Presentation/EditItem/EditItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";



class EditItemScreen extends Component {

    constructor(props) {
        super(props)
    }

    onGoBackClick = (e) => {
        e.preventDefault();
        this.props.history.push('/MainScreen');
    }

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} currentUser='editItem' />
                <EditItem onGoBackClick={this.onGoBackClick}></EditItem>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.firebase.username,
        screenMode: state.mainScreen.mainScreenMode
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditItemScreen));
