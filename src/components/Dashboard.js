import React, { Component } from 'react';
//import styles from './Dashboard.module.css'
import {
  Route,
  Link
} from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import BoardHeader  from 'components/BoardHeader';
import BoardContent from 'components/BoardContent';
import BoardFooter  from 'components/BoardFooter';

import Transactions from 'components/Transactions';
import TransactionDetail from 'components/TransactionDetail';
import AddTransaction from 'components/AddTransaction';

const styles = theme => ({
    root: {
       background: theme.palette.primary[200],
       height: "100%"
    }
});

// Component
// style dashboard layout
export class Dashboard extends Component {
    render(){        
        var {classes, match} = this.props;
        
        return(
            <div className={classes.root}>
                <BoardHeader />
                <BoardContent>                                 
                    <Route exact path={match.url} render={(props) => {
                        return (<div> Dash init</div>)
                    }}/>
                                    
                    <Route path={`/transactions`} render={(props) => {                        
                        return (<Transactions/>)
                    }}/>

                    <Route path={`/transaction`} render={(props) => {
                        return (<TransactionDetail/>)
                    }}/>

                    <Route path={`/add`} render={(props) => {                       
                        return (<AddTransaction/>)
                    }}/>                    
                </BoardContent>
                <BoardFooter/>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);