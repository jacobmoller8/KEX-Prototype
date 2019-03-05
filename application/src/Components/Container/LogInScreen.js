import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser, tryLoginUser, removeUser } from "../../Actions/firebaseActions";
import { userLoginUserInput, userLoginPassInput } from "../../Actions/userActions";
import LogIn from '../Presentation/LogIn/LogIn'
import Header from '../Presentation/Header/Header'
import getAccessToken from '../../Utilities/getAccessToken';
import { withRouter } from "react-router-dom";


class LogInScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			logInError: false
		}

	}

	onLoginClick = (e) => {
		console.log(getAccessToken())
		this.props.tryLoginUser(this.props.user["username"])
		setTimeout(() => {
			this.loginControlCheck();
		}, 1000);
	}

	loginControlCheck() {
		try {
			if (this.props.user["username"] === this.props.firebase["username"] &&
				this.props.user["password"] === this.props.firebase["password"]) {
				this.setState({
					logInError: false
				})
				this.props.history.push('/MainScreen')

			} else {
				this.setState({
					logInError: true
				})
				this.props.removeUser()
				console.log("this.props.user: " + this.props.user["username"] + " this.props.password: " + this.props.user["password"] +
					" this.props.firebase.user: " + this.props.firebase["username"] + "this.firebase.pw: " + this.props.firebase["password"])
			}
		}
		catch {
			this.setState({
				logInError: true
			})
			this.props.removeUser()
			console.log("wrong user/pass")
		}
	}

	render() {
		return (
			<div className="LogInScreen">
				{<Header isLoggedIn={false} />}
				{<LogIn
					onUserInput={(e) => this.props.userLoginUserInput(e.target.value)}
					onPassInput={(e) => this.props.userLoginPassInput(e.target.value)}
					onLoginClick={this.onLoginClick}
					logInError={this.state.logInError} />}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
	firebase: state.firebase,
	screenMode: state.mainScreen.mainScreenMode

});

const mapActionsToProps = {

	addUser: addUser,
	tryLoginUser: tryLoginUser,
	userLoginUserInput: userLoginUserInput,
	userLoginPassInput: userLoginPassInput,
	removeUser: removeUser
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LogInScreen));