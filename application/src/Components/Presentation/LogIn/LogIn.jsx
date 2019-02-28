import React, { Component } from 'react';
import CircularIntegration from '../Loaders/ButtonLoader'
import './LogIn.css';
import LogInError from '../LogInError/LogInError'

export default class LogIn extends Component {


	render() {
		let errorBox = <span id="noError"></span>
		if (this.props.logInError){
			errorBox = <LogInError/>
		}

		return (
			<div>
				<div className="row justify-content-center" >
					<div className="col-md-4 col-sm-10 text-center">

						<div id="signInContainer">
							<form>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Username:</label>
									<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JohnnyCool" onChange={this.props.onUserInput}></input>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Password:</label>
									<input type="password" className="form-control" id="InputPassword" placeholder="*******" onChange={this.props.onPassInput}></input>
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

