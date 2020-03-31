const express = require('express');
const router = express.Router();
const { login, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

router
    .route('/')
    .get(auth, getUser)
    .post(login);

module.exports = router;
