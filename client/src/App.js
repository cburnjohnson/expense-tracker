import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PrivateRoute from './components/auth/PrivateRoute';

import { GlobalProvider } from './context/GlobalState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
