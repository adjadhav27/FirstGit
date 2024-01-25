import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/ExpenseItem.css";
import React from "react";
import ExpenseForm from "./components/AddExpense/ExpenseForm";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 2000.5, date: new Date(2021, 0, 22) },
    { title: "Health Insurance", amount: 1499.5, date: new Date(2022, 1, 28) },
    { title: "House Insurance", amount: 2499.5, date: new Date(2023, 4, 25) },
    { title: "Store Insurance", amount: 2049.5, date: new Date(2024, 5, 29) },
  ];
  return (
    <div>
      <h2 className="expense-item">Expense Items</h2>
      <ExpenseForm/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
