const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: String,
  required: true,
  amount: Number,
  required: true,
  category: String,
  required: true,
  date: Date,
  required: true,
});

module.exports = mongoose.model("Expense", expenseSchema);
