import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './FeedbackInput.css'


let muiBtnStyle = {
	border: 'solid',
	backgroundColor: 'rgb(249, 145, 34)',
	borderWidth: '1px',
	borderColor: 'rgb(249, 145, 34)',
	color: 'white'
}

export default class FeedbackInput extends Component {

	render() {
		
		var feedbackList = [];
		for (let key in this.props.allFeedback) {
			try {
				feedbackList.push(
					<div className="row">
						<div className="container col-12 singleFeedbackWrapper">
							<div className="row">
								<div className="textWrapper col-9">
									<p>{this.props.allFeedback[key]}</p>
								</div>
								<div className="btnWrapper col-3">
									<Button style={muiBtnStyle}>
										<img className="tableIcon" src={require('../../../Images/Icons/delete.svg')} alt="deleteIcon">
										</img>
									</Button>
								</div>
							</div>
						</div>
					</div>
				)
			}
			catch (error) {
				console.log(error)
			}
		}



		return (
			<div className="container-fluid col-11 feedBackWrapper">
				<Paper className="paperWrapper">
					<div className="btnContainer">
						<Button className="backBtn" style={muiBtnStyle} onClick={this.props.onCloseFeedbackClick} >Back</Button>
					</div>
					<div className="row">
						<div className="container-fluid col-11 inputBox">
							<h6>Leave feedback to the developers</h6>
							<TextField className="container-fluid col-11" multiline onChange={(e) => this.props.handleValueChange(e.target.value)} value={this.props.setValue}></TextField>
							<div className="container-fluid btnContainer">
								<Button style={muiBtnStyle} onClick={this.props.onSaveFeedbackClick}>Save</Button>
							</div>
						</div>
					</div>
					<div className="container-fluid col-12 feedbackContainer">
						<h5 style={{textDecoration: 'underline', marginBottom: '15px', marginTop: '15px'}}>My Feedback</h5>
						{feedbackList}
					</div>
				</Paper>
			</div>
		)
	}
}
