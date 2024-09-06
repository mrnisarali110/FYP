const express = require('express');
const { Register, Login, ForgotPasswordLink, ForgotPassword, ResetPassword } = require('../handlers/auth.handler');

const authRoutes = express.Router();

// Define the registration route
authRoutes.post('/register', Register);
authRoutes.post('/login', Login);
authRoutes.post('/forgot-password-link', ForgotPasswordLink);
authRoutes.post('/forgot-password', ForgotPassword);
authRoutes.post('/reset-password', ResetPassword);

module.exports = authRoutes;