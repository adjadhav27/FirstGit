import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div>
      <div className='expense-item'>
      <div className="expense-item__description"><h2>Food</h2></div>
      <div className="expense-item__price">Rs.10</div>
      </div>
      <div className='expense-item'>
      <div className="expense-item__description"><h2>Food</h2></div>
      <div className="expense-item__price">Rs.10</div>
      </div>
      <div className='expense-item'>
      <div className="expense-item__description"><h2>Food</h2></div>
      <div className="expense-item__price">Rs.10</div>
    </div>
    </div>
  );
}

export default ExpenseItem;
