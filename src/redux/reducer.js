import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import transactionsReducer from './modules/Transactions';
// import other reducers

export default combineReducers({
  transactionsState: transactionsReducer,
  form: reduxFormReducer
});
