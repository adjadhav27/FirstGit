import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';
import './Expenses.css';

const Expenses = (props) => {
  const {items} = props;
  return (
    <Card className="expenses">
      {items.map((object, index)=>(
        <ExpenseItem
        title={object.title}
        amount={object.amount}
        date={object.date}
      />
        ))}
    </Card>
  );
}

export default Expenses;