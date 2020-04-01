const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    getTransactions,
    addTransaction,
    deleteTransaction
} = require('../controllers/transactionsController');

router
    .route('/')
    .get(auth, getTransactions)
    .post(auth, addTransaction);

router.route('/:id').delete(auth, deleteTransaction);

module.exports = router;
