import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";
import React, {useState} from 'react';

const ExpenseItem = (props) => {

  const [val1, setValue] = useState(props.amount);

  function clickHandler(){
    setValue(100);
  }
  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${val1}</div>
        <button onClick={clickHandler}>Expense to $100</button>
      </Card>
  );
}

export default ExpenseItem;
