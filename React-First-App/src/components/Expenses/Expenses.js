import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React, {useState} from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const {items} = props;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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