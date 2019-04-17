import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './EditItem.css';
import ItemFeedbackBox from "../ItemFeedbackBox/ItemFeedbackBox";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

export default class EditItem extends Component {
	render() {

		if (this.props.status === "error" || this.props.status === "accept") {
			var feedbackBox = <ItemFeedbackBox status={this.props.status} message={this.props.message} />
		}

		return (
			<div>
				<div className="row">
					<Paper className="container-fluid col-lg-6 col-md-6 col-11 editItemBody text-center" elevation={6} square>
						<h3 className="title">Edit Item</h3>
						<div className="container-fluid col-8 staticInfoContainer">
							<p className="staticText"> {this.props.FullNameValue} </p>
							<p className="staticText"> Barcode: {this.props.EANValue} </p>
						</div>


						<form autoComplete="off">
							<div className="form-group formInputs">
								<InputLabel className="inLabel" shrink={true}>Name:</InputLabel><br/>
								<Input
									className="col-11"
									type="text"
									placeholder="Ex: Bananas"
									id="nameInput"
									defaultValue={this.props.NameValue}
									onChange={this.props.updateNameValue}>
								</Input>
								<InputLabel className="inLabel" shrink={true} >Comment:</InputLabel><br/>
								<Input
									className="col-11"
									type="text"
									placeholder="Ex: only 3 left"
									id="commentInput"
									defaultValue={this.props.CommentValue}
									onChange={this.props.updateCommentValue}>
								</Input>
								<InputLabel className="inLabel" shrink={true}>Quantity (Number):</InputLabel><br/>
								<Input
									className="col-11"
									type="number"
									inputProps={{ min: "1", max: "10", step: "1" }}
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

					</Paper>
				</div>

			</div >
		)
	}
}
