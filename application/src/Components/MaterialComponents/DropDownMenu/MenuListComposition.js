import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import {store} from '../../../Store/store'
import {orderByName, orderByEAN, orderByDate} from '../../../Actions/sortListActions'
import orderList from '../../../Utilities/orderList'

const styles = theme => ({
  root: {
		display: 'block'
  },
  paper: {
		marginRight: theme.spacing.unit * 2,
		zIndex: '100'
  },
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event, value) => {
		let currentScreen = store.getState().mainScreen.mainScreenMode
		let currentList = store.getState().firebase.inventory

		if (currentScreen === 'shopping'){
			currentList = store.getState().firebase.shopping
		}else if (currentScreen === 'trash'){
			currentList = store.getState().firebase.trash
		}

    if (this.anchorEl.contains(event.target)) {
			return;
    }
		if (value === 'name'){
			orderList(currentList, 'name', currentScreen)
			store.dispatch(orderByName())
		}else if(value === 'date'){
			orderList(currentList, 'date', currentScreen)
			store.dispatch(orderByDate())
		}else if(value === 'EAN'){
			orderList(currentList, 'EAN', currentScreen)
			store.dispatch(orderByEAN())
		}
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
					style={{backgroundColor: 'white'}}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
						aria-haspopup="true"
						variant='contained'
						size="small"
            onClick={this.handleToggle}
          >
            Order By
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList >
                      <MenuItem onClick={(e) => this.handleClose(e, 'name')}>Name</MenuItem>
                      <MenuItem onClick={(e) => this.handleClose(e, 'date')}>Date</MenuItem>
                      <MenuItem onClick={(e) => this.handleClose(e, 'EAN')}>EAN code</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);