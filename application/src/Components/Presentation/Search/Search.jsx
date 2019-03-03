import React, { Component } from 'react';
import './Search.css';


export default class Search extends Component {
	render() {
		return (
			<div className="container">
				<div className="row" id="searchRow">
					<div className="col">
						<form onSubmit={(e) => e.preventDefault()} className="searchForm">
							Search:
						<input onChange={this.props.onSearch} type="text" name="Ex. Bananas" />
						</form>
					</div>
				</div>
			</div>
		)
	}
}	
