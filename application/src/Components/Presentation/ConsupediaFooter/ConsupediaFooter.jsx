import React from 'react'
import './ConsupediaFooter.css'
import Paper from '@material-ui/core/Paper';

export default function ConsupediaFooter() {
    return (
        <div className="container-fluid footer">
            <Paper className="container-fluid col-9 col-md-4 consuLogoHolder" elevation={6} square>
            <p className="footerText">Powered with data by:</p>
                <a href="https://consupedia.se/">
                    <img className="consuLogo" src={require('../../../Images/ConsupediaLogo.svg')} alt="Consupedia Logo"></img>
                </a>
            </Paper>
        </div>
    )
}
