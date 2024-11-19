import React, { useState } from "react";
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString()
    };
    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setCategory('');
  };

  const getWeeklySummary = () => {
    const weeklySummary = transactions.reduce((summary, transaction) => {
      if (!summary[transaction.category]) {
        summary[transaction.category] = 0;
      }
      summary[transaction.category] += transaction.amount;
      return summary;
    }, {});
    return weeklySummary;
  };

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g., Food)"
          required
        />
        <button type="submit">Add Transaction</button>
      </form>

      <h2>Weekly Summary</h2>
      <ul>
        {Object.entries(getWeeklySummary()).map(([category, total]) => (
          <li key={category}>{category}: ${total}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
