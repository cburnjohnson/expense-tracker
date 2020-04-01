const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id });

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// @desc    Add transaction
// @route   POST /api/transactions
// @access  Private
exports.addTransaction = async (req, res, next) => {
    try {
        const { name, amount } = req.body;

        const transaction = await Transaction.create({
            name: name,
            amount: amount,
            user: req.user.id
        });

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
};

// @desc    Delete transactions
// @route   GET /api/transactions/:id
// @access  Private
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }
        console.log(req.user.id);
        console.log(transaction.user);
        if (req.user.id !== transaction.user.toString()) {
            return res.status(401).json({
                success: false,
                error: 'Not authorized'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: { msg: 'Transaction removed' }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
