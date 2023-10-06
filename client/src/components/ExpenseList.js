import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id} style={{ marginBottom: "12px" }}>
            <strong>Name:</strong> {expense.name}, <strong>Amount:</strong> $
            {expense.amount}, <strong>Category:</strong> {expense.category},{" "}
            <strong>Date:</strong> {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
