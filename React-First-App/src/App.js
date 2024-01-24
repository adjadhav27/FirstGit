import ExpenseItem from "./components/ExpenseItem";
import "./components/ExpenseItem.css";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 2000.5, date: new Date(2021, 0, 22), locationOfExpenditure: 'NY'},
    { title: "Health Insurance", amount: 1499.5, date: new Date(2022, 1, 28), locationOfExpenditure: 'Texas' },
    { title: "House Insurance", amount: 2499.5, date: new Date(2023, 4, 25), locationOfExpenditure: 'Nevada'},
    { title: "Store Insurance", amount: 2049.5, date: new Date(2024, 5, 29), locationOfExpenditure: 'Alabama' },
  ];
  return (
    <div>
      <h2 className="expense-item">Expense Items</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;