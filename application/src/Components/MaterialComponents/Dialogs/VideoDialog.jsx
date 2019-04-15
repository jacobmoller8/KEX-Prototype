import React from 'react';
import {Button} from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './DialogStyle.css'

class VideoDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>	
				<Button className="funcBtn" onClick={this.handleClickOpen}><img className="btnImage" src={require('../../../Images/Icons/VideoIcon.svg')} alt="shoppingIcon"></img></Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Instruktionsfilm till skannersystemet"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Vill du veta mer om hur du använder det tillhörande skannersystemet?
							Klicka på länken för att komma till en instruktionsfilm:
							<br></br><a href="https://youtu.be/lgr9I4g9zco">https://youtu.be/lgr9I4g9zco</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant='success'>
              Tillbaka
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default VideoDialog;