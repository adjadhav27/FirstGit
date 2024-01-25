import React from 'react';

const ExpenseForm = () => {

    function updateTitle(event){
        console.log(event.target.value);
    }

    function updateAmount(event){
        console.log(event.target.value);
    }

    function updateDate(event){
        console.log(event.target.value);
    }

    return (
        <form>
                    <label for="title">Expense Title</label>
                    <input type='text' id="title" onChange={updateTitle}/><br/><br/>
                    <label for="amount">Expense Amount</label>
                    <input type='number' id="amount" onChange={updateAmount}/><br/><br/>
                    <label for="date">Expense Date</label>
                    <input type='date' id="date" onChange={updateDate}/><br/><br/>
                <button type='submit'>Add New Expense</button><br/><br/>
        </form>
    );
};

export default ExpenseForm;