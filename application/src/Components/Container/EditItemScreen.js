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
            name: "",
            comment: "",
            quantity: ""
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

    onAddItemClick = (e) => {
        e.preventDefault();
        if (isNaN(this.state.quantity)) {
            console.log("Quantity is not a number")
        }
        else {
            confirmCurrentItem(this.props.username, this.state.name, this.state.comment, this.state.quantity)
            this.resetState()
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
<<<<<<< HEAD
                <Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} currentUser={this.props.username} />
                <EditItem
                    NameValue={store.getState().currentItem.item.name}
                    CommentValue={store.getState().currentItem.item.comment}
                    QuantityValue={store.getState().currentItem.item.quantity}
                    updateNameValue={(e) => this.updateNameValue(e.target.value)}
                    updateCommentValue={(e) => this.updateCommentValue(e.target.value)}
                    updateQuantityValue={(e) => this.updateQuantityValue(e.target.value)}
                    onConfirmItemClick={this.onConfirmItemClick}
                    onGoBackClick={this.onGoBackClick}>
                </EditItem>
=======
                <Header isLoggedIn={true} onLogoutClick={this.onLogoutClick} currentUser='editItem' />
                <EditItem onGoBackClick={this.onGoBackClick}></EditItem>
>>>>>>> 7d7de51b712075456588794153995e77a8383cf9
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
