import React from 'react'
import './LogInError.css'

export default function LogInError() {
	return (
		<div id="logInErrorBox">
			<div className="container-fluid errorMessage">
				<div className="row">
					<img className="errIcon" src={require('../../../Images/Icons/NoRed.svg')} alt="errorIcon"></img>
					<p id="errText"> Invalid Username or Password </p>
				</div>
			</div>
		</div>
	)
}
