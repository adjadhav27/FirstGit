import './ExpenseItem.css';

function ExpenseItem() {
  const LocationOfExpenditure = 'Mumbai';
  const foodName = 'Indian';
  const amount = 249.50;
  return (
    <div>
      <div className='expense-item'>
      <div className="expense-item__description"><h2>{foodName}</h2></div>
      <div className="expense-item__description"><h2>{LocationOfExpenditure}</h2></div>
      <div className="expense-item__price">${amount}</div>
      </div>
      {/* <div className='expense-item'>
      <div className="expense-item__description"><h2>Petrol</h2></div>
      <div className="expense-item__price">Rs.10</div>
      </div>
      <div className='expense-item'>
      <div className="expense-item__description"><h2>Food</h2></div>
      <div className="expense-item__price">Rs.10</div>
      </div> */}
    </div>
  );
}

export default ExpenseItem;
