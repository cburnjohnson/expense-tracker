const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) => {
    // Get Token from header
    const token = req.header('x-auth-token');

    // Check if there is a token
    if (!token) {
        return res.status(401).json({msg: 'No Token, authorization denied'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}