import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select'
import {FormControl} from 'material-ui/Form'
import CardRow from 'components/CardRow';

import NewTransactionForm from 'components/NewTransactionForm';

const styles = theme => ({
    root: {
        width: '100%',
        margin: 'auto',
        background: theme.palette.primary[900],  
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }, 
    formControl: {
        background: theme.palette.primary[900],  
    },
    rootMenu: {
        background: theme.palette.primary[900]
    },
    item: {
        background: theme.palette.primary[900]
    },
    priceText: {
        width: '40%'
    }
})

class AddTransaction extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            coin: 1,
            description: ""
        }
    }

    handleChange =  name => event => {
        console.log("change");
        this.setState({ [name]: event.target.value });
    }

    handleFormSubmit(values) {
        console.log(values)
    }

    render() { 
        var {classes} = this.props;
        return (
            <Grid container justify='center'>
                <Grid item xs={12} md={8} lg={6}>
                    <Card className={classes.root}>
                        <CardContent>
                            <NewTransactionForm
                                onSubmit={this.handleFormSubmit}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>)
    }
}
 
export default withStyles(styles)(AddTransaction);                            

{/* <form className={classes.container} autoComplete="off">
<FormControl className={classes.formControl}>
<InputLabel htmlFor="coin-simple">Coin</InputLabel>
<Select
    value={this.state.coin}
    onChange={this.handleChange('coin')}
    input={<Input id="coin-simple" />}
    MenuProps={{
        PopoverClasses:{
            paper: classes.rootMenu
        }
    }}>
    <MenuItem value="" className={classes.item}>
        <em>None</em>
    </MenuItem>
    <MenuItem value={1} className={classes.item}>Bitcoin</MenuItem>
    <MenuItem value={2} className={classes.item}>Steemit</MenuItem>
    <MenuItem value={3} className={classes.item}>OmiseGo</MenuItem>
</Select>
</FormControl>
<div className='hspace'></div>                               
<TextField
    id="date"
    label="Date"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    SelectProps= {{
      MenuProps:{
            className: classes.rootMenu
        }  
    }}
    InputLabelProps={{
        shrink: true,
}}/>
<div className='hspace'></div>
<div className={classes.priceText}>Price : 7000$!!!</div>
<div className='full-width-space'></div>
<TextField
    id="multiline-flexible"
    label="Multiline"
    multiline
    rowsMax="10"
    value={this.state.description}
    onChange={this.handleChange('description')}
    className={classes.textField}                                   
    />
</form> */}

