import React, { Component } from 'react';
import './Search.css';


export default class Search extends Component {
	render() {
		return (
				<div className="row" id="searchRow">
					<div className="container-fluid col-8 col-sm-5 col-md-4 searchContainer">
						<form onSubmit={(e) => e.preventDefault()} className="searchForm">
							<h6>Search:</h6>
						<input onChange={this.props.onSearch} type="text" name="searchField" placeholder=" Ex. Bananas" id="searchInput" />
						</form>
					</div>
				</div>
		)
	}
}	
