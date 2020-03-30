import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const context = useContext(GlobalContext);

    const { addTransaction } = context;

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name: text,
            amount: +amount
        };

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
        document.querySelector('input[type="text"').focus();
    };

    return (
        <>
            <h3>Add New Transaction</h3>
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
                        <span className='highlight'>
                            (negative = expense, positive = income)
                        </span>
                    </label>
                    <input
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder='Enter amount...'
                        required
                    />
                </div>

                <button className='btn'>ADD TRANSACTION</button>
            </form>
        </>
    );
};

export default AddTransaction;
