const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
    res.send('get trans');
};

// @desc    Add transaction
// @route   POST /api/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    res.send('POST trans');
};

// @desc    Delete transactions
// @route   GET /api/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('delete trans');
};
