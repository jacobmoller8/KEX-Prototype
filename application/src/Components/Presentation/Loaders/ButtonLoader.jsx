import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange';
import Button from '@material-ui/core/Button';


const orangeTheme = createMuiTheme({
	palette: { primary: orange },
	typography: {
		useNextVariants: true,
	}
})

const styles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	wrapper: {
		margin: theme.spacing.unit,
		position: 'relative',
	},
	buttonSuccess: {
		backgroundColor: orange[500],
		'&:hover': {
			backgroundColor: orange[700],
		},
	},
	buttonProgress: {
		color: orange[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
});

class CircularIntegration extends React.Component {
	state = {
		loading: false,
		success: false,
	};

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	handleButtonClick = () => {
		if (!this.state.loading) {
			this.props.onButtonClick()
			this.setState(
				{
					success: false,
					loading: true,
				},
				() => {
					this.timer = setTimeout(() => {
						this.setState({
							loading: false,
							success: true,
						});
					}, 1100);
				},
			);
		}
	};

	render() {
		const { loading, success } = this.state;
		const { classes } = this.props;
		const buttonClassname = classNames({
			[classes.buttonSuccess]: success,
		});

		return (
			<div className={classes.root}>
				<div className={classes.wrapper}>
					<MuiThemeProvider theme={orangeTheme}>
						<Button variant="contained" color="primary" style={{ backgroundColor: orange }} className={buttonClassname} disabled={loading} onClick={this.handleButtonClick}>
							Sign In
          </Button>
					</MuiThemeProvider>
					{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
				</div>
			</div>
		);
	}
}

CircularIntegration.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIntegration);