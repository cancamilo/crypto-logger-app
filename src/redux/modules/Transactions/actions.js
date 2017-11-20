import * as types from './types';
import CoinAPIClient from 'api/coinAPIClient';

export const switchLoadingCoinContent = (check) => {
    return {
        type: types.SWITCH_LOADING_COINS,
        payload: check
    }
}

export const setCoinList = (list) => {
    return {
        type: types.SET_COINS_LIST,
        payload: list
    }   
}

export const startLoadingCoins = () => {
    return (dispatch, getState) => {    
        CoinAPIClient.getCoinList()
            .then( (list) => {
                dispatch(setCoinList(list));
            })
        }
}

