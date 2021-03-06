import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};

class FancyCheckbox extends React.Component {
    state = {
        checked: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        this.props.handleCheck(this.props.currentItem)
    };

    componentWillMount(){
        if (this.props.currentItem.checked === false){
            this.setState({checked: false})
        }else if (this.props.currentItem.checked === true){
            this.setState({checked: true})
        }else{
            this.setState({checked: false})
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleChange('checked')}
                            value="checked"
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />
                    }
                />

            </FormGroup>
        );
    }
}

FancyCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FancyCheckbox);