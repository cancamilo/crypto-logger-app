import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, {RadioGroup} from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import CardRow from 'components/CardRow';
import DetailChart from 'components/DetailChart';

const styles = theme => ({
    card: {
        width: '100%',
        margin: 'auto',
        background: theme.palette.primary[900],        
    },
    info: {
        color: theme.palette.text.secondary
    },
    selector: {
        display: 'flex',
        justifyContent: 'flex-end'  
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',      
        color: theme.palette.text.secondary     
    },
    separator: {
        width: theme.spacing.unit * 3
    },
    vseparator:{
        height: theme.spacing.unit * 2
    }
})

export class TransactionDetail extends Component {
    
    render() { 
        var {classes} = this.props;
        return (
            <Grid container justify='center'>            
                <Grid item xs={12} md={8} lg={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <CardRow align='left'>
                                <div className={classes.labelRoot}>
                                    Prices in                            
                                </div>
                                <div className={classes.separator}>
                                </div>
                                <RadioGroup         
                                    row                       
                                    aria-label="coin"
                                    name="coin"
                                    value='Dollar'>
                                    <FormControlLabel value="Dollar" control={<Radio />} label="Dollar" />
                                    <FormControlLabel value="Bitcoin" control={<Radio />} label="Bitcoin" />
                                    <FormControlLabel value="Euro" control={<Radio />} label="Euro" />                        
                                </RadioGroup>                    
                            </CardRow>
                            <div className={classes.vseparator}></div>
                            <Divider />
                            <div className={classes.vseparator}></div>
                            <CardRow align='left'>
                                <div>                    
                                    <Typography type="subheading" className={classes.info}>
                                        Coin
                                    </Typography>
                                    <Typography type="title" >
                                        Ethereum
                                    </Typography>
                                </div>
                                <div className={classes.separator}>
                                </div>
                                <div>                    
                                    <Typography type="subheading" className={classes.info}>
                                        Date Sold
                                    </Typography>
                                    <Typography type="title">
                                        10.05.2017
                                    </Typography>
                                </div>
                                <div className={classes.separator}>
                                </div>
                                <div>                    
                                    <Typography type="subheading"  className={classes.info}>
                                        Price
                                    </Typography>
                                    <Typography type="title" >
                                        50$
                                    </Typography>
                                </div>
                                <div className={classes.separator}>
                                </div>
                                <div>                    
                                    <Typography type="subheading" className={classes.info}>
                                        Current Price
                                    </Typography>
                                    <Typography type="title" >
                                        70$
                                    </Typography>
                                </div>
                                <div className={classes.separator}>
                                </div>
                                <div>                    
                                    <Typography type="subheading"  className={classes.info}>
                                        Gain
                                    </Typography>
                                    <Typography type="title">
                                        20$
                                    </Typography>
                                </div>
                            </CardRow>      
                            <div className={classes.vseparator}></div>
                            <Divider/>
                            <div className={classes.vseparator}></div>        
                            <CardRow align="left">
                                <div>                    
                                    <Typography type="title">
                                        Trade Description
                                    </Typography>
                                    <div className={classes.vseparator}></div>
                                    <Typography type="subheading" className={classes.info}>
                                        News about Amazon accepting bitcoin as a paying method
                                    </Typography>
                                </div>                       
                            </CardRow>   
                            <div className={classes.vseparator}></div>  
                            <Divider/>
                            <div className={classes.vseparator}></div>        
                            <DetailChart/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>)
    }
}

TransactionDetail.PropTypes = {
    classes: PropTypes.object.isRequired,
}
 
export default withStyles(styles)(TransactionDetail);