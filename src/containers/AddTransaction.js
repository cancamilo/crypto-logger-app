import React, {Component} from 'react';
import { connect } from 'react-redux';
import {initialize} from 'redux-form';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as actions from 'redux/modules/Transactions/actions';
import NewTransactionForm from 'components/NewTransactionForm';
import CoinAPIClient from 'api/coinAPIClient';

class AddTransaction extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);        

        var {dispatch} = props;

        // dispatch initial actions
        var initForm = {
            coin: "Bitcoin",
            description: "Empty"
        }
        dispatch(initialize("addForm", initForm));
        dispatch(actions.startLoadingCoins());        
    }

    componentWillReceiveProps(nextProps) {
        if(!this.props.formState || !this.props.formState.values)
            return;

        var oldCoin = this.props.formState.values.coin;
        var newCoin = nextProps.formState.values.coin; 
        
        if(oldCoin !== newCoin) {
            console.log("new call here!!", newCoin);
            //CoinAPIClient.request('')
        }
    }

    handleFormSubmit(values) {
        console.log("submitting followinf values :", values)
    }

    render() {
        var coins = this.props.transactionsState.coins;
        return (<NewTransactionForm 
                    coinList={coins}
                    onSubmit={this.handleFormSubmit}/>)
    }
}

function mapStateToProps(state) {
    return {
      formState: state.form.addForm,      
      transactionsState: state.transactionsState
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      actions: bindActionCreators(actions, dispatch)
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
