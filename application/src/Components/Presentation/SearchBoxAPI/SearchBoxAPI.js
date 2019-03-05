import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './SearchBoxAPI.css'

export default class SearchBoxAPI extends Component {
	render() {
		return (
			<div className="container-fluid col-8 searchBox">
				<form id="apiSearchForm" onSubmit={() => this.props.onApiSearch}>
					<label>Barcode Search:</label>
					<input type="text" className="form-control" value={this.props.valueHandler} onChange={this.props.changeHandler}/>
					<Button className="btn ApiSearchBtn" onClick={this.props.onApiSearch}> Search </Button>
				</form>
			</div>
		)
	}
}
