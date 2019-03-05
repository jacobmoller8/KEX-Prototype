import React, { Component } from 'react';
import Header from '../Presentation/Header/Header';
import EditItem from '../Presentation/EditItem/EditItem';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from '../../Store/store';
import { removeCurrentItem, confirmCurrentItem } from '../../Actions/currentItemActions';



class EditItemScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            comment: this.props.comment,
            quantity: this.props.quantity
        }
    }

    updateNameValue = (input) => {
        this.setState({
            name: input
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
        if (isNaN(this.state.quantity)) {
            console.log("Quantity input is not a number")
        }
        else {
            confirmCurrentItem(this.props.username, this.props.screenMode, this.props.item, this.state.name, this.state.comment, this.state.quantity)
        }
    }

    onGoBackClick = (e) => {
        store.dispatch(removeCurrentItem());
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
                <EditItem
                    NameValue={store.getState().currentItem.item.name}
                    CommentValue={store.getState().currentItem.item.comment}
                    QuantityValue={store.getState().currentItem.item.quantity}
                    EANValue={store.getState().currentItem.item.EANcode}
                    updateNameValue={(e) => this.updateNameValue(e.target.value)}
                    updateCommentValue={(e) => this.updateCommentValue(e.target.value)}
                    updateQuantityValue={(e) => this.updateQuantityValue(e.target.value)}
                    onConfirmItemClick={this.onConfirmItemClick}
                    onGoBackClick={this.onGoBackClick}>
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
        comment: state.currentItem.item.comment,
        quantity: state.currentItem.item.quantity,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditItemScreen));
