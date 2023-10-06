import React, { useState } from "react";
import axios from "axios";

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/expenses",
        expense
      );
      // Assumes your backend is running on the same domain
      addExpense(response.data);
      setExpense({ name: "", amount: "", category: "", date: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
          margin: "auto auto",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={expense.name}
          onChange={handleChange}
          style={{ padding: "7px 10px" }}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
          style={{ padding: "7px 10px" }}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={expense.category}
          onChange={handleChange}
          style={{ padding: "7px 10px" }}
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          style={{ padding: "7px 10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "7px 10px",
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
