const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @desc    Gets logged in user
// @route   GET /api/auth
// @access  Private
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// @desc    Log user in
// @route   POST /api/auth
// @access  Public
exports.login = async (req, res, next) => {
    let { email, password } = req.body;

    try {
        if (email) {
            email = email.toLowerCase();
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Email not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};
