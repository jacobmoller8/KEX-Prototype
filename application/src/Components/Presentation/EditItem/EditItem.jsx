import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './EditItem.css';
import ItemFeedbackBox from "../ItemFeedbackBox/ItemFeedbackBox";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default class EditItem extends Component {
	render() {

		if (this.props.status === "error" || this.props.status === "accept") {
			var feedbackBox = <ItemFeedbackBox status={this.props.status} message={this.props.message} />
		}

		return (
			<div>
				<div className="row">
					<div className="container-fluid col-lg-6 col-md-6 col-11 addItemBody text-center">
						<h3 className="title">Edit Item</h3>
						<p id="EANcode"> EAN code: {this.props.EANValue} </p>

						<form autoComplete="off">
							<div className="form-group">
									<InputLabel className="inLabel" shrink={true}>Short Name:</InputLabel>
									<Input
										className="col-11"
										type="text"
										id="nameInput"
										defaultValue={this.props.NameValue}
										onChange={this.props.updateNameValue}>
									</Input>
									<InputLabel className="inLabel" shrink={true}>Full Name:</InputLabel>
									<Input
										className="col-11"
										type="text"
										id="fullNameInput"
										defaultValue={this.props.FullNameValue}
										onChange={this.props.updateFullNameValue}>
									</Input>
									<InputLabel className="inLabel" shrink={true} >Comment:</InputLabel>
									<Input
										className="col-11"
										type="text"
										id="commentInput"
										defaultValue={this.props.CommentValue}
										onChange={this.props.updateCommentValue}>
									</Input>
									<InputLabel className="inLabel" shrink={true}>Quantity (Number):</InputLabel>
									<Input
										className="col-11"
										type="text"
										id="quantityInput"
										defaultValue={this.props.QuantityValue}
										onChange={this.props.updateQuantityValue}>
									</Input>
								
								</div>
								{feedbackBox}
								<div className="row btnRow">
									<div className="container-fluid col-4 backBtnCont">
										<Button className="btn goBackButton" type="submit" onClick={this.props.onGoBackClick}>  <img className="backIcon" src={require('../../../Images/Icons/back.svg')} alt="shoppingIcon"></img> </Button>
										<p> Back </p>
									</div>
									<div className="container-fluid col-4 confirmBtnCont">
										<Button className="btn confirmButton" type="submit" onClick={this.props.onConfirmItemClick}> <img className="addIcon" src={require('../../../Images/Icons/yes.svg')} alt="shoppingIcon"></img> </Button>
										<p> Save </p>
									</div>
								</div>



						</form>

					</div>
				</div>

			</div >
		)
	}
}
