import React from 'react';

import Header from '../transactions/Header';
import Balance from '../transactions/Balance';
import IncomeExpenses from '../transactions/IncomeExpenses';
import TransactionList from '../transactions/TransactionList';
import AddTransaction from '../transactions/AddTransaction';

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
