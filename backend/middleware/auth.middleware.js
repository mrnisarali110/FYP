const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate JWT tokens
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer token" format

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // Attach user object to the request
    next(); // Proceed to the next middleware or route handler
  });
};

// Middleware to check if the authenticated user is an admin
const verifyAdmin = async (req, res, next) => {
  // Assuming `user` has `role` property in the database
  if (req.user && req.user.role === 'admin') {
    next();  // Proceed if the user is admin
  } else {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

module.exports = { authenticateToken, verifyAdmin };