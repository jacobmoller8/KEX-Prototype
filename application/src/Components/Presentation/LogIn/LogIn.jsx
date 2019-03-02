import React, { Component } from 'react';
import CircularIntegration from '../../MaterialComponents//Loaders/ButtonLoader'
import './LogIn.css';
import LogInError from '../LogInError/LogInError'

export default class LogIn extends Component {


	render() {
		let errorBox = <span id="noError"></span>
		if (this.props.logInError) {
			errorBox = <LogInError />
		}

		return (
			<div>
				<div className="row justify-content-center" >
					<div className="col-lg-6 col-md-10 col-sm-10 text-center">

						<div id="signInContainer">
							<form>
								<div className="form-group">
									<label>Username:</label>
									<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onBlur={this.props.onUserInput}></input>
								</div>
								<div className="form-group">
									<label>Password:</label>
									<input type="password" className="form-control" id="InputPassword" placeholder="********" onBlur={this.props.onPassInput}></input>
								</div>
								{errorBox}
								<br />
								<div id="logInBtnContainer">
									<CircularIntegration onButtonClick={this.props.onLoginClick} />
								</div>
							</form>
						</div>

						<p id="registerText">Haven't got an account?</p>
						<button type="submit" className="btn btn-warning">Register</button>

					</div>


				</div>
			</div>

		)
	}
}

