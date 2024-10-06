const express = require('express');
const { Register, Login, SaveOrders, ResetPassword, getOrders, getAllUsers, getAllOrders } = require('../handlers/auth.handler');
const { authenticateToken } = require('../middleware/auth.middleware');

const authRoutes = express.Router();

authRoutes.post('/register', Register);
authRoutes.post('/login', Login);
authRoutes.post('/reset-password', ResetPassword);
authRoutes.post('/save-orders', authenticateToken, SaveOrders);
authRoutes.get('/get-orders', authenticateToken, getOrders);
authRoutes.get('/get-all-users', authenticateToken, getAllUsers);
authRoutes.get('/get-all-orders', authenticateToken, getAllOrders);

module.exports = authRoutes;