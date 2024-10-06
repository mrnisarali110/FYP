const express = require('express');
const router = express.Router();
const Order = require('./order.model'); // Import the Order model
const { authenticateToken, verifyAdmin } = require('../middleware/auth.middleware'); // Correct function names

// Get all orders
router.get('/orders', authenticateToken, verifyAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete an order by ID
router.delete('/orders/:id', authenticateToken, verifyAdmin, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        await order.remove();
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;