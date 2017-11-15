import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from 'containers/App/App';
import Dashboard from 'components/Dashboard';

const Routes = () => (
    <Router>
        <div className="fullContainer">
            <Route exact path="/home"  component={App}/>
            <Route path="/" component={Dashboard}/>                    
        </div>
    </Router>
)

export default Routes;