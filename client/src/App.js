import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import axios from "axios";

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    // Fetch expenses from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("/expenses"); // Assumes your backend is running on the same domain
        setExpenses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
