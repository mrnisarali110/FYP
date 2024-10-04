const express = require('express');
const router = express.Router();
const User = require('../schema/User');
const { authenticateToken, verifyAdmin } = require('../middleware/auth.middleware');

// Get all users (accessible only to admins)
router.get('/users', authenticateToken, verifyAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users', error: err.message });
    }
});

// Delete a user by ID (accessible only to admins)
router.delete('/users/:id', authenticateToken, verifyAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete user', error: err.message });
    }
});

module.exports = router;
