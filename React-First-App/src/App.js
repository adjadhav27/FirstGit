import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/ExpenseItem.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Car Insurance",
      amount: 2000.5,
      date: new Date(2021, 0, 22),
    },
    {
      id: 2,
      title: "Health Insurance",
      amount: 1499.5,
      date: new Date(2022, 1, 28),
    },
    {
      id: 3,
      title: "House Insurance",
      amount: 2499.5,
      date: new Date(2023, 4, 25),
    },
    {
      id: 4,
      title: "Store Insurance",
      amount: 2049.5,
      date: new Date(2024, 5, 29),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        id: expense.id,
        title: expense.title,
        amount: Number(expense.amount),
        date: new Date(expense.date),
      },
    ]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
