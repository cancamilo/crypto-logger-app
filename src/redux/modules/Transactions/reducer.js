import * as types from './types';

const initialState = {
    coins: [],
    loadingCoins: false
}

export default function transactionsReducer(state = initialState, action){
    switch (action.type) {
        case types.SWITCH_LOADING_COINS:
            return {
                ...state,
                loadingCoins: action.payload
            }
        case types.SET_COINS_LIST:           
            return {
                ...state,
                coins: action.payload
            }    
        default:
            return state;
    }
}