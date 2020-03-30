import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    error: null,
    loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    // Actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/transactions');

            dispatch({ type: 'GET_TRANSACTIONS', payload: res.data.data });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post(
                '/api/transactions',
                transaction,
                config
            );

            dispatch({ type: 'ADD_TRANSACTION', payload: res.data.data });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/transactions/${id}`);
            dispatch({ type: 'DELETE_TRANSACTION', payload: id });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                loading: state.loading,
                error: state.error,
                deleteTransaction,
                addTransaction,
                getTransactions
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
