const express = require('express');
const { Register, Login, SaveOrders, ResetPassword } = require('../handlers/auth.handler');
const authenticateToken = require('../middleware/auth.middleware'); // Adjust the path if needed
const authRoutes = express.Router();

// Define the registration route
authRoutes.post('/register', Register);
authRoutes.post('/login', Login);
authRoutes.post('/reset-password', ResetPassword);

// Save orders route - Protected by authenticateToken middleware
authRoutes.post('/save-orders', authenticateToken, SaveOrders);

module.exports = authRoutes;
