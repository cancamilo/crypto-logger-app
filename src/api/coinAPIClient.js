import axios from 'axios';
import * as config from 'config/config';

export default class CoinAPIClient {    

    static initialize() {

    }

    static getCoinList() {
        // full list of coins
        // e.g https://www.cryptocompare.com/api/data/coinlist/

        // top in the market
        // e.g https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=20"

        const endpoint = config.coinDataEndpoint;        

        return axios.get(`${endpoint}/top/volumes?tsym=USD&limit=10`)
                .then((response) => {
                    return response.data.Data;
                })
                .catch((err) => {
                    console.log(err);
                });
    }

    static requestCoinInfo(coinID, convert = 'USD') {  
        // e.g https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR      
        const endpoint = config.coinDataEndpoint;

        return axios.get(endpoint, {params: {fsym: coinID, tsyms:convert}})
            .then((result) => {
                console.log("results in", result);
                return result;
             })
            .catch((err) => console.log(err));

    }

    static requestCoinHistorical(coinID, convert) {

    }
}