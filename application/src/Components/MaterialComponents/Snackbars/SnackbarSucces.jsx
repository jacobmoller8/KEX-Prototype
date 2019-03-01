import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import './SnackbarStyle.css'

const variantIcon = {
	success: CheckCircleIcon
};

const styles1 = theme => ({
	success: {
		backgroundColor: green[600],
	},
	icon: {
		fontSize: 20,
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing.unit,
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},
});

function MySnackbarContent(props) {
	const { classes, className, message, onClose, variant, ...other } = props;
	const Icon = variantIcon[variant];

	return (
		<SnackbarContent
			className={classNames(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
					<Icon className={classNames(classes.icon, classes.iconVariant)} />
					{message}
				</span>
			}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					className={classes.close}
					onClick={onClose}
				>
					<CloseIcon className={classes.icon} />
				</IconButton>,
			]}
			{...other}
		/>
	);
}

MySnackbarContent.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	message: PropTypes.node,
	onClose: PropTypes.func,
	variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
});

class SuccessSnackbar extends React.Component {
	state = {
		open: false,
	};

	handleClick = () => {
		this.props.onAddTo(this.props.itemToAdd, this.props.comesFrom)
		this.setState({ open: true });
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<React.Fragment>
				<Button id="addToShopIcon" className={classes.margin} onClick={this.handleClick} >  <img className="tableIcon" src={require('../../../Images/Icons/shoppingCart.svg')} alt="shoppingIcon"></img> </Button>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={this.state.open}
					autoHideDuration={6000}
					onClose={this.handleClose}
				>
					<MySnackbarContentWrapper
						onClose={this.handleClose}
						variant="success"
						message='Added Item to Shopping List' 
					/>
				</Snackbar>
			</React.Fragment>
		);
	}
}

SuccessSnackbar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles2)(SuccessSnackbar);