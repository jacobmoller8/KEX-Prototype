import React from 'react'
import './LogInError.css'

export default function LogInError() {
	return (
		<div id="logInErrorBox">
			<div className="container-fluid errorMessage">
				<div className="row justify-content-center align-items-center">
					<img className="errIcon" src={require('../../../Images/Icons/NoRed.svg')} alt="errorIcon"></img>
					<p id="errText" className="align-self-center"> Invalid username or password </p>
				</div>
			</div>
		</div>
	)
}
