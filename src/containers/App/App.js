import React, { Component } from 'react';
import money from 'images/money.svg';

//styles
import './App.css'
import './App.scss';

//modules
import cssStyles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={cssStyles.header}>
          <h1>Welcome to Crypto Logger</h1>
          <img src={money} className="App-logo" alt="app-logo" />
          <br/>
          <button>Start</button>
        </div> 
      </div>
    );
  }
}

export default App;
