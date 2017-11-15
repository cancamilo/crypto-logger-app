import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'

// Dependencies and configuration of Material-UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

import grey from 'material-ui/colors/grey';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import blueGrey  from 'material-ui/colors/blueGrey';

require('typeface-roboto');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();
const myTheme = createMuiTheme({

    palette:{
        "type": 'dark',
        "primary": blueGrey,
        "secondary": red,
        "background": {
            "default": "#fafafa",
            "paper": "#fff",
            "appBar": blueGrey[900],
            "contentFrame": "#eeeeee"
          }        
    },
    overrides : {
        MuiTableRow: {
            hover: {
                "background": blueGrey[700]
            }
        }
    },    
})


const FullApp = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={myTheme}>
            <Routes/>
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(<FullApp/>, document.getElementById('root'));
registerServiceWorker();
