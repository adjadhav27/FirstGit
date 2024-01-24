import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>{props.date.toISOString()}</h2>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expense-item__description"><h2>{props.locationOfExpenditure}</h2></div>
      </div>
    </div>
  );
}

export default ExpenseItem;