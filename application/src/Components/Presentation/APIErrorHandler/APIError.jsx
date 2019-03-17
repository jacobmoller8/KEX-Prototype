import React from 'react'
import './APIError.css'

export default function APIError(props) {
	return (
		<div>
			<p className="errorText">{props.currentError}</p>
		</div>
	)
}
