const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Register a user
// @route   POST /api/users
// @access  Public
exports.addUser = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        email = email.toLowerCase();
        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({ msg: 'Email already in use' });
        }

        user = new User({
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

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
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        }
    }
};
