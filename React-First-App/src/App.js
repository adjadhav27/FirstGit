import ExpenseItem from "./components/ExpenseItem"; 
import './components/ExpenseItem.css';

function App() {
  return (
    <div>
      <h2 className="expense-item">Expense Items</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;