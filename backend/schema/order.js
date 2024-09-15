const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  orderData: { type: Object, required: true }, // Flexible field for dynamic order data
  createdAt: { type: Date, default: Date.now }
});

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
