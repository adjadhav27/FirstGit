import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    if (enteredExpenseData) {
    }
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
