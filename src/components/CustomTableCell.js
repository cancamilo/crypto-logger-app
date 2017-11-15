import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import {TableCell} from 'material-ui/Table';
import {withStyles} from 'material-ui/styles'
import PropTypes from 'prop-types';

const styles = theme => ({
    cell: {
        fontSize: '14px',
        margin: '5px 10px',
        color: theme.palette.text.secondary
    }
});

class CustomTableCell extends Component {    
    render() {         
        var {classes, ...restProps} = this.props;
        return (
            <TableCell {...restProps} padding='none'>
                <Typography type="subheading" className={classes.cell}>
                    {this.props.children}
                </Typography>
            </TableCell>)
    }
}

CustomTableCell.PropTypes = {
    classes: PropTypes.object.isRequired
}
 
export default withStyles(styles)(CustomTableCell);

