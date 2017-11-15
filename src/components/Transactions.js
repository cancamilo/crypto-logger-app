import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import {Link, withRouter} from 'react-router-dom';

import CustomTableCell from 'components/CustomTableCell';

const styles = theme => ({
    root: {
      margin: 'auto',      
      border: "3px solid red",
      marginTop: theme.spacing.unit * 3,
      background: theme.palette.primary[900],
      overflowX: 'auto',
    },    
    tableRoot: {
      background: theme.palette.primary[900],
      minWidth: 700,
    },
    tableHover: {
        '&:hover':{
            background: theme.palette.primary[800],
            cursor: "pointer"
        }        
    },
    addAction: {
        display: 'flex',
        justifyContent: 'flex-end'    
    },
    actionText: {
        color: theme.palette.primary[800]
    },
    button: {
        background: theme.palette.primary[500],
        margin: theme.spacing.unit,
    },
  });

const fakeTransactions = [
    {
        id: 1,
        coin: "Bitcoin",
        type: "Buy",
        date: "10.01.2014",
        amount: "100"
    },
    {
        id: 2,
        coin: "DigiByte",
        type: "Buy",
        date: "23.01.2016",
        amount: "500"
    },
    {
        id: 3,
        coin: "Ethereum",
        type: "Buy",
        date: "10.01.2014",
        amount: "1000"
    },
    {
        id: 4,
        coin: "FakeCoin",
        type: "Buy",
        date: "04.12.2017",
        amount: "130"
    },
    {
        id: 5,
        coin: "Bitcoin",
        type: "Sell",
        date: "10.11.2017",
        amount: "10"
    }
]

// TODO: separate this component in Transactions and TransactionsView 
// The Transaction can be linked to the router and to redux. the view only get the properties
class Transactions extends Component {
    
    render() { 
        var {classes, history} = this.props;
        return ( 
            <div>
                <Grid container justify='center'>       
                    <Grid item xs={12} md={8}>
                        <div className={classes.addAction}>
                            <div className={classNames(classes.actionText, 'centered-text')}>
                                Add New
                            </div>
                            <Button fab color="primary" aria-label="add" className={classes.button}>
                                <AddIcon />
                            </Button>
                        </div>      
                    </Grid>                            
                    <Grid item xs={12} md={8}>                
                        <Table className={classes.root}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Coin</CustomTableCell>
                                    <CustomTableCell>Type</CustomTableCell>
                                    <CustomTableCell>Date</CustomTableCell>
                                    <CustomTableCell numeric>Total (Buy/Sell)</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {fakeTransactions.map(tr => {
                                return (<TableRow hover
                                                key={tr.id}                                                                             
                                                classes={{
                                                    root: classes.tableRoot,
                                                    hover: classes.tableHover
                                                }}
                                                onClick={event => {
                                                    history.push("/transaction");
                                                }}>
                                            <CustomTableCell>{tr.coin}</CustomTableCell>
                                            <CustomTableCell>{tr.type}</CustomTableCell>
                                            <CustomTableCell>{tr.date}</CustomTableCell>
                                            <CustomTableCell numeric>{tr.amount}</CustomTableCell>
                                        </TableRow>)                        
                            })}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
 
export default withRouter(withStyles(styles)(Transactions));