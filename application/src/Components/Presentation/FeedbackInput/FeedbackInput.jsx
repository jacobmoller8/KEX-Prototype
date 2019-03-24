import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap';
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
		return (
			<div className="container-fluid col-11 feedBackWrapper">
				<Paper className="paperWrapper">
					<div className="btnContainer">
						<Button className="backBtn" style={muiBtnStyle} onClick={this.props.onCloseFeedbackClick}>Back</Button>
					</div>
					<div className="row">
						<div className="container-fluid col-11 inputBox">
							<h6>Leave feedback to the developers</h6>
							<TextField className="container-fluid col-11" multiline ></TextField>
							<div className="container-fluid btnContainer">
								<Button style={muiBtnStyle}>Save</Button>
							</div>
						</div>
					</div>


					<Table striped hover responsive className="container-fluid col-11 feedBackTable" >
						<thead>
							<tr>
								<th>
									Feedback
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam.
							</td>
							</tr>
							<tr>
								<td>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate consectetur fugiat illum, optio necessitatibus culpa itaque pariatur quos eos.
							</td>
							</tr>
							<tr>
								<td>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</td>
							</tr>
						</tbody>
					</Table>
				</Paper>
			</div>
		)
	}
}
