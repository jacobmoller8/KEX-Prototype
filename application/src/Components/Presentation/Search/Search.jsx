import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
	render() {
		return (
			<div className="row" id="searchRow">
				<div className="container-fluid col-8 col-sm-6 searchContainer">
					<form onSubmit={(e) => e.preventDefault()}>
						Filter by:
						<input onChange={this.props.onSearch} type="text" name="searchField" placeholder='Ex. Bananas' id="searchInput"/>
					</form>
				</div>
			</div>
		)
	}
}	
