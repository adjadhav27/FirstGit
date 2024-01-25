import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";
import React from 'react';

const ExpenseItem = (props) => {
  function clickHandler(){
    alert("Delete Button Clicked!!")
  }
  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Delete Expense</button>
      </Card>
  );
}

export default ExpenseItem;
