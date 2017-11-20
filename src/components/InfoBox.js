import React from 'react';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CardRow from 'components/CardRow';

const styles = theme => ({
    info: {
        color: theme.palette.text.secondary
    },
    highlight: {
    }
})

const InfoBox = (props) => {
    return(
        <div className={props.className}>                    
            <Typography type="subheading" className={props.classes.info}>
                {props.label}
            </Typography>
            <Typography type="title" className={props.classes.highlight}>
                {props.value}
            </Typography>
        </div>
    )
}

export default withStyles(styles)(InfoBox);