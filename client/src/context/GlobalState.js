import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const initialState = {
    transactions: [],
    error: null,
    loading: true,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
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

    // Auth actions / Registration
    async function registerUser(formData) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: 'REGISTER_ERROR',
                payload: err.response.data.msg
            });
        }
    }

    async function loadUser() {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/api/auth');
            dispatch({ type: 'USER_LOADED', payload: res.data });
        } catch (err) {
            dispatch({ type: 'AUTH_ERROR' });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                loading: state.loading,
                error: state.error,
                isAuthenticated: state.isAuthenticated,
                token: state.token,
                user: state.user,
                deleteTransaction,
                addTransaction,
                getTransactions,
                registerUser,
                loadUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
