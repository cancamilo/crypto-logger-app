import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form'
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';

// Global styles
import './CustomGlobal.css';

// Components
import CardRow from 'components/CardRow';
import InfoBox from 'components/InfoBox';

const styles = theme => ({
    root: {        
        background: theme.palette.primary[900],  
        padding: 10,
    },
    topArea: {
        margin: "auto",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap"
    },
    bottomArea: {
        width: "100%"
    },
    rootMenu: {
        background: theme.palette.primary[900]
    },
    container: {  
        background: theme.palette.primary[900]
    }, 
    item: {
        background: theme.palette.primary[900]
    },
    formControl: {
        background: theme.palette.primary[900],  
    },
    leftPanel: {
        border: "1px solid red",       
        width: "40%"
    },
    rightPanel: {
        border: "1px solid red",
        width: "40%"
    }
})

const renderSelectField = withStyles(styles) (({ input, label,  handleSubmit, meta: { touched, error }, children, classes, ...rest }) => {    
    return (      
      <FormControl className={classes.formControl}>      
        <InputLabel htmlFor="coin-simple">{label}</InputLabel>
        <Select                
            value={input.value}            
            onChange={(e) => {
                e.preventDefault();
                input.onChange(e.target.value);
            }}            
            {...rest}          
            MenuProps={{
                PopoverClasses:{
                    paper: classes.rootMenu
                }
            }}
            input={<Input id="coin-simple" />}            >
                {children}
        </Select>
      </FormControl>)
});

const renderDescriptionField = withStyles(styles)(({input, label, handleSubmit, meta: { touched, error }, className, children, classes, ...rest}) => {
    return(
        <TextField
            onChange={() => console.log("description changed")}
            label={label}
            {...input}
            id="multiline-test"
            multiline
            rows="2"
            rowsMax ="10"
            className={className}
            margin="normal"
            {...rest}/>    
    )
});

var NewTransactionForm = props => {
    var {handleSubmit, classes} = props;
    return (
    <Grid container justify='center'>
        <Grid item xs={12} md={8}>        
            <div className={classes.root}>            
                <div className={classes.topArea}>
                    <div className={classes.leftPanel} >      
                        <Field name="coin" label={"Coin"} component={renderSelectField}>                      
                            {props.coinList.map((item, idx) => <MenuItem key={idx} value={item["NAME"]} className={classes.item}>{item.NAME}</MenuItem> )}                            
                        </Field>                            
                        <div className="vspace"></div>                  
                    </div>
                    <div className="hspace"></div>
                    <div className={classes.rightPanel}>
                       <CardRow>
                           <InfoBox label="Markecap" value="344455353"/>
                           <div className="hspace"></div> 
                           <InfoBox label="Price" value="23"/>                           
                       </CardRow>
                    </div>
                </div>
                <div className={classes.bottomArea}>
                    <Field name="description" 
                           label="Description" 
                           fullWidth
                           component={renderDescriptionField}/>                                                                  
                    <div className="vspace"></div>                      
                    <Button onClick={(e) => {
                                e.preventDefault();
                                props.handleSubmit();
                            }}
                            raised color="primary">Add</Button>  
                </div>   
            </div>     
        </Grid> 
    </Grid>)
}

NewTransactionForm = withStyles(styles)(NewTransactionForm);
export default reduxForm({form: 'addForm'})(NewTransactionForm);