import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }, 
    item: {
        background: theme.palette.primary[900]
    }
})

const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
  ) => (      
      <Select        
        onChange={() => console.log("coin changed!")}
        {...input}
        {...custom}>
            {children}
      </Select>
)

const renderDescriptionField = (
      {input, label, meta: { touched, error }, className, children, ...custom}
  ) => (
    <TextField
        onChange={() => console.log("description changed")}
        {...input}
        multiline
        rowsMax ="10"
        className={className}
    />    
)

var NewTransactionForm = props => {
    var {handleSubmit, classes} = props;
    return (<form onSubmit={handleSubmit}
          className={classes.container} 
          autoComplete="off">
        <Field name="coin" component={renderSelectField}>
            <MenuItem value="" className={classes.item}>
               <em>None</em>
            </MenuItem>
            <MenuItem value={1} className={classes.item}>Bitcoin</MenuItem>
            <MenuItem value={2} className={classes.item}>Steemit</MenuItem>
            <MenuItem value={3} className={classes.item}>OmiseGo</MenuItem>
        </Field>
        <Field name="description"/>
    </form>)
}

NewTransactionForm = withStyles(styles)(NewTransactionForm);
export default reduxForm({form: 'addForm'})(NewTransactionForm);