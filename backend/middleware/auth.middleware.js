const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer token" format

  if (token == null) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // Attach user object to the request
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
