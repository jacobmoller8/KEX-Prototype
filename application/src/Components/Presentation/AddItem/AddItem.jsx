import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './AddItem.css';
import SearchBoxAPI from '../SearchBoxAPI/SearchBoxAPI';
import ItemFeedbackBox from "../ItemFeedbackBox/ItemFeedbackBox";
import APIError from '../APIErrorHandler/APIError';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


let APIErrorVisibility = ({ display: 'none' })

export default class AddItem extends Component {

	render() {

		if (this.props.status === "error" || this.props.status === "accept") {
			var feedbackBox = <ItemFeedbackBox status={this.props.status} message={this.props.message} />
		}

		if (this.props.currentError === "") {
			APIErrorVisibility = ({ display: 'none' })
		} else {
			APIErrorVisibility = ({ display: 'block' })
		}


		return (
			<div>
				<div className="row">
					<div className="container-fluid col-lg-6 col-md-6 col-11 addItemBody text-center">
						<h3 className="title">Add Item</h3>

						<form autoComplete="off">
							<div className="form-group">
								<InputLabel className="inLabel" shrink={true}>Short Name:</InputLabel>
								<Input
									className="col-11"
									type="text"
									id="nameInput"
									value={this.props.NameValue}
									onChange={this.props.updateNameValue}>
								</Input>
								<InputLabel className="inLabel" shrink={true}>Full Name:</InputLabel>
								<Input
									className="col-11"
									type="text"
									id="fullNameInput"
									value={this.props.FullNameValue}
									onChange={this.props.updateFullNameValue}>
								</Input>
								<InputLabel className="inLabel" shrink={true}>Comment:</InputLabel>
								<Input
									className="col-11"
									type="text"
									id="commentInput"
									value={this.props.CommentValue}
									onChange={this.props.updateCommentValue}>
								</Input>
								<InputLabel className="inLabel" shrink={true}>Quantity (Number):</InputLabel>
								<Input
									className="col-11"
									type="text"
									id="quantityInput"
									value={this.props.QuantityValue}
									onChange={this.props.updateQuantityValue}>
								</Input>
							</div>

							{feedbackBox}

							<div className="row btnRow">
								<div className="container-fluid col-4 backBtnCont">
									<Button className="btn goBackButton" type="submit" onClick={this.props.onGoBackClick}>  <img className="backIcon" src={require('../../../Images/Icons/back.svg')} alt="shoppingIcon"></img> </Button>
									<p> Back </p>
								</div>
								<div className="container-fluid col-4 addBtnCont">
									<Button className="btn confirmButton" type="submit" onClick={this.props.onAddItemClick}> <img className="addIcon" src={require('../../../Images/Icons/yes.svg')} alt="shoppingIcon"></img> </Button>
									<p> Add </p>
								</div>
							</div>
						</form>
						<APIError currentError={this.props.currentError} style={APIErrorVisibility} />
						<SearchBoxAPI onApiSearch={this.props.onApiSearch} valueHandler={this.props.EANSearchValue} changeHandler={this.props.updateEANSearchValue} />

					</div>
				</div>

			</div>
		)
	}
}
