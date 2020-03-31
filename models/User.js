const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a email'],
        trim: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Please add a password']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);
