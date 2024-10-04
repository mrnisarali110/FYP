const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  storeName: String,
  storeUrl: String,
  phone: String,
  cnic: String,
  userId: { type: mongoose.Schema.Types.ObjectId, unique: true, default: () => new mongoose.Types.ObjectId() },
  role: {
    type: String,
    enum: ['user', 'admin'], // Adding role field
    default: 'user' // Default role is user
  }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

// Generate JWT token method
userSchema.methods.generateToken = function () {
  const secretKey = process.env.SECRET_KEY; // Use environment variable
  if (!secretKey) {
    throw new Error('Secret key not defined in environment variables');
  }

  const token = jwt.sign({ id: this.userId, email: this.email, role: this.role }, secretKey, { // Include role in token
    expiresIn: '1h', // Token expiration time
  });

  return token;
};

//new
userSchema.methods.generateToken = function () {
const secretKey = process.env.SECRET_KEY;
const token = jwt.sign({ id: this.userId, email: this.email, role: this.role }, secretKey, {
  expiresIn: '1h',
});
return token;
};


const User = mongoose.model("User", userSchema);

module.exports = User;
