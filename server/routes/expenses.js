const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Add an expense
router.post("/expenses", async (req, res) => {
  try {
    const { name, amount, category, date } = req.body;
    const expense = new Expense({ name, amount, category, date });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all expenses
router.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
