const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  orderData: { type: Object, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;