import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import EditItem from '../Presentation/EditItem/EditItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { store } from '../../Store/store';
import { removeCurrentItem, confirmCurrentItem } from '../../Actions/currentItemActions';
import { updateFirebaseData } from '../../Actions/firebaseActions';
import { emptyToken } from '../../Actions/apiActions';
import { emptyFilter } from '../../Actions/searchActions';
import { userLogout } from '../../Actions/userActions';


class EditItemScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            fullName: this.props.fullName,
            comment: this.props.comment,
            quantity: this.props.quantity,
            status: "none",
            message: ""
        }
    }
    componentWillMount() {
        let username = store.getState().user.username
        store.dispatch(updateFirebaseData(username))
    }

    updateNameValue = (input) => {
        this.setState({
            name: input
        })
    }
    updateFullNameValue = (input) => {
        this.setState({
            fullName: input
        })
    }
    updateCommentValue = (input) => {
        this.setState({
            comment: input
        })
    }
    updateQuantityValue = (input) => {
        this.setState({
            quantity: input
        })
    }

    onConfirmItemClick = (e) => {
        e.preventDefault();
        if (isNaN(this.state.quantity) || this.state.quantity === "") {
            this.setState({ status: "error", message: "Quantity is not a number" })
        }
        else if (this.state.quantity < 1) {
            this.setState({ status: "error", message: "Quantity must be atleast 1" })
        }
        else {
            confirmCurrentItem(this.props.username, this.props.screenMode, this.props.item, this.state.name, this.state.comment, this.state.quantity, this.state.fullName)
            this.setState({ status: "accept", message: "Item updated successfully" })
        }
    }

    onGoBackClick = (e) => {
        store.dispatch(removeCurrentItem());
        e.preventDefault();
        this.props.history.push('/MainScreen');
    }

    onLogoutClick = (e) => {
        e.preventDefault();
        store.dispatch(emptyToken())
        store.dispatch(emptyFilter())
        store.dispatch(userLogout())
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} currentUser='editItem' />
                <EditItem
                    NameValue={store.getState().currentItem.item.name}
                    FullNameValue={store.getState().currentItem.item.fullname}
                    CommentValue={store.getState().currentItem.item.comment}
                    QuantityValue={store.getState().currentItem.item.quantity}
                    EANValue={store.getState().currentItem.item.EANcode}
                    updateNameValue={(e) => this.updateNameValue(e.target.value)}
                    updateFullNameValue={(e) => this.updateFullNameValue(e.target.value)}
                    updateCommentValue={(e) => this.updateCommentValue(e.target.value)}
                    updateQuantityValue={(e) => this.updateQuantityValue(e.target.value)}
                    onConfirmItemClick={this.onConfirmItemClick}
                    onGoBackClick={this.onGoBackClick}
                    status={this.state.status}
                    message={this.state.message}>
                </EditItem>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.firebase.username,
        screenMode: state.mainScreen.mainScreenMode,
        item: state.currentItem.item.EANcode,
        name: state.currentItem.item.name,
        fullName: state.currentItem.item.fullname,
        comment: state.currentItem.item.comment,
        quantity: state.currentItem.item.quantity,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditItemScreen));
