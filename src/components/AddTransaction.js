import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const getDate = new Date();
    const year = getDate.getFullYear();
    let month = getDate.getMonth();
    month = month + 1;
    const day = getDate.getDate();
    const currentDate = `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
    }`;

    const context = useContext(GlobalContext);

    const { addTransaction } = context;

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(currentDate);

    const onSubmit = e => {
        e.preventDefault();

        const dateSplit = date.split('-');
        const formattedDate = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            date: formattedDate
        };

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
        document.querySelector('input[type="text"').focus();
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Transaction Name</label>
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='Enter transaction...'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative = expense, positive = income)
                    </label>
                    <input
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder='Enter amount...'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='date'>Transaction Date</label>
                    <input
                        type='date'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        name='date'
                        required
                    />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;
