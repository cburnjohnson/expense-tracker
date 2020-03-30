import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const context = useContext(GlobalContext);

    const { deleteTransaction } = context;

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span>
            <span className='transaction-date'>{transaction.date}</span>
            <button
                className='delete-btn'
                onClick={() => deleteTransaction(transaction.id)}
            >
                x
            </button>
        </li>
    );
};

export default Transaction;
