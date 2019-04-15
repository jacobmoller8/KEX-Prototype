import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser, updateFirebaseData, removeUser } from "../../Actions/firebaseActions";
import { userLoginUserInput, userLoginPassInput } from "../../Actions/userActions";
import { setToken } from '../../Actions/apiActions';
import LogIn from '../Presentation/LogIn/LogIn'
import Header from '../Presentation/Header/Header'
import { withRouter } from "react-router-dom";
import { store } from '../../Store/store'

class LogInScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			logInError: false
		}

	}

	onLoginClick = (e) => {
		//console.log(getAccessToken())

		this.props.updateFirebaseData(this.props.user["username"])
		setTimeout(() => {
			this.loginControlCheck();
		}, 1000);
	}
	onRegisterClick = () => {
		this.props.history.push('/RegisterScreen')
	}

	loginControlCheck() {
		try {
			if (this.props.user["username"] === this.props.firebase["username"] &&
				this.props.user["password"] === this.props.firebase["password"]) {
				store.dispatch(setToken())
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
				<Header isLoggedIn={false} />
				<LogIn
					onUserInput={(e) => this.props.userLoginUserInput(e.target.value)}
					onPassInput={(e) => this.props.userLoginPassInput(e.target.value)}
					onLoginClick={this.onLoginClick}
					onRegisterClick={this.onRegisterClick}
					logInError={this.state.logInError} />
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
	updateFirebaseData: updateFirebaseData,
	userLoginUserInput: userLoginUserInput,
	userLoginPassInput: userLoginPassInput,
	removeUser: removeUser
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LogInScreen));