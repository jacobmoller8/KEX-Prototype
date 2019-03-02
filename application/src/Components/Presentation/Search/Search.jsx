import React, { Component } from 'react'

export default class Search extends Component {
	render() {
		return (
			<div className="row" id="searchRow">
				<div className="container-fluid">
					<form onSubmit={(e) => e.preventDefault()}>
						Search for:
						<input onChange={this.props.onSearch} type="text" name="Ex. Bananas" />
					</form>
				</div>
			</div>
		)
	}
}
