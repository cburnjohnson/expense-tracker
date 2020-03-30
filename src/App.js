import React from 'react';
import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <Balance />
                <IncomeExpenses />
            </div>
            <div className='transaction-grid'>
                <div className='transaction-list'>
                    <TransactionList />
                </div>

                <div className='transaction-form'>
                    <AddTransaction />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
