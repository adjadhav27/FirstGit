import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    let [enteredId, setID] = useState(4);
    const [isWindowVisible, setWindowVisible] = useState(false);

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
       setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        if(event){
            setID(enteredId+=1);
        }
        event.preventDefault();

        const expenseData = {
            id: enteredId,
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        setWindowVisible(false);
    }
    
    const switchWindowVisibility = () => {
        setWindowVisible((earlyVisibility) => !earlyVisibility);
    };

    return (
        <div>
        {isWindowVisible ? (
        <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input
                type='text'
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                value={enteredAmount}
                min='0.01'
                step='0.01'
                onChange={amountChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                value={enteredDate}
                min='2019-01-01'
                max='2023-12-31'
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            <button type='button' onClick={switchWindowVisibility}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className='new-expense__actions'>
          <button type='button' onClick={switchWindowVisibility}>
            Add Expense
          </button>
        </div>
      )}
        </div>
    );
};

export default ExpenseForm;
