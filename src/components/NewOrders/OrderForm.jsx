import React, { useState } from "react";

import './OrderForm.css';

const OrderForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.savedExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (<form onSubmit={submitHandler}>
        <div className="new-order__controls">
            <div className="new-order__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-order__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-order__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-order__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Order</button>
        </div>
    </form>);
};

export default OrderForm;