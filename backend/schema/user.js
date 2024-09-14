const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");  // Add this line to use JWT

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  storeName: String,
  storeUrl: String,
  phone: String,
  cnic: String,
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
  // Add your own secret key here
  const secretKey = "your_secret_key"; // Replace with a real secret key in production

  // Payload can include user id or any relevant info
  const token = jwt.sign({ id: this._id, email: this.email }, secretKey, {
    expiresIn: "1h",  // Token expiration time
  });

  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
