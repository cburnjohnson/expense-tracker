const express = require('express');
const router = express.Router();

const { addUser } = require('../controllers/usersController');

router.route('/').post(addUser);

module.exports = router;
