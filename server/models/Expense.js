const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
