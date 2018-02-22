import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../components/App';
import Home from '../components/Home';

export default () => (
    <Router>
        <div>
            <App>
                <Switch>
                    <Route path="/" exact render={props => <Home {...props} />} />
                    <Route path="/home" render={props => <Home {...props} />} />
                </Switch>
            </App>
        </div>
    </Router>
)