import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

const Transaction = ({ transaction }) => {
    const context = useContext(GlobalContext);

    const { deleteTransaction } = context;

    const date = new Date(transaction.createdAt);
    const transactionDate = date.toDateString();

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.name}
            <span className={transaction.amount < 0 ? 'expense' : 'income'}>
                {sign}${numberWithCommas(Math.abs(transaction.amount))}
            </span>
            <span className='transaction-date highlight'>
                {transactionDate}
            </span>
            <button
                className='delete-btn'
                onClick={() => deleteTransaction(transaction._id)}
            >
                x
            </button>
        </li>
    );
};

export default Transaction;
