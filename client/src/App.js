import React from 'react';
import './App.css';

import Home from './components/pages/Home';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Home />
        </GlobalProvider>
    );
}

export default App;
