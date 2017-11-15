import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
      width: "100%",
      margin: "auto",
      marginTop: 20,
      paddingTop: 0,
      borderColor: theme.palette.secondary[500],
      paddingBottom:0,
      background: theme.palette.primary[200]
    },
  });

  // TODO: make container div a Grid

export class BoardContent extends Component {
    render() {
        var {classes} = this.props;
        return (                              
            <div className={classes.root} elevation={5}>
                {this.props.children}
            </div>)
    
    }
}

BoardContent.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(BoardContent);