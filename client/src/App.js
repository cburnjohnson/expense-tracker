import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
