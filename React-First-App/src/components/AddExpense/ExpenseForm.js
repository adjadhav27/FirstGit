import React from 'react';

const ExpenseForm = () => {
    return (
        <form>
                    <label for="title">Expense Title</label>
                    <input type='text' id="title"/><br/><br/>
                    <label for="amount">Expense Amount</label>
                    <input type='number' id="amount"/><br/><br/>
                    <label for="date">Expense Date</label>
                    <input type='date' id="date"/><br/><br/>
                <button type='submit'>Add New Expense</button><br/><br/>
        </form>
    );
};

export default ExpenseForm;