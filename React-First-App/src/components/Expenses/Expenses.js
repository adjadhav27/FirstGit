import Card from '../UI/Card';
import React, {useState} from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // const {items} = props;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
