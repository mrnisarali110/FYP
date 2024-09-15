const ExpressJoiValidation = require("express-joi-validation");
const Joi = require("joi");
const User = require("../schema/user");
const Order = require("../schema/order");
const userRegistrationSchema = require("../validations/registration");

//register user
const Register = async (req, res) => {

  console.log(req.body)
  const userValidation = await userRegistrationSchema.validate(req.body);
  if (userValidation.error) {
    const errorResponse = userValidation.error.details.reduce((acc, err) => {
      const key = err.context.key;
      const message = err.message.replace(/"/g, ""); // Remove the extra quotes
      acc[key] = message;
      return acc;
    }, {});

    res.status(200).json(errorResponse);
  } else {
    
    const { name, email, password, storeName, storeUrl, phone, cnic } = req.body;
    // return res.status(201).json({ message: "User registered." });

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new user
    const user = new User({ name, email, password, storeName, storeUrl, phone, cnic });
    await user.save();

    res.json({ message: "User created successfully" });
  }
};

//Login user
const Login = async (req, res) => {
  console.log("Login request received", req.body);

  const { email, password } = req.body;

  // Validate the login credentials
  const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const loginValidation = await loginSchema.validate(req.body);
  if (loginValidation.error) {
    console.log("Login validation failed", loginValidation.error.details);
    const errorResponse = loginValidation.error.details.reduce((acc, err) => {
      const key = err.context.key;
      const message = err.message.replace(/"/g, ""); // Remove the extra quotes
      acc[key] = message;
      return acc;
    }, {});

    return res.status(400).json(errorResponse); // Return 400 (Bad Request) for validation errors
  }

  console.log("Login validation passed, checking user in DB...");

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" }); // Return 404 (Not Found) for user not found
  }

  console.log("User found, verifying password...");

  // Compare the password
  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    console.log("Invalid password");
    return res.status(401).json({ message: "Invalid password" }); // Return 401 (Unauthorized) for invalid password
  }

  console.log("Password valid, generating token...");

  // Generate token
  const token = await user.generateToken();

  console.log("Login successful, token generated:", token);

  res.status(200).json({ token, message: "User logged in successfully" });
};



//save order in DB
const SaveOrders = async (req, res) => {
  try {
    // Extract userId from the authenticated request
    if (!req.user || !req.user.id) {
      console.error('User not authenticated or userId not found in request');
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const userId = req.user.id;

    // Extract order data from the request body
    const orderData = req.body.orders; // Assuming the frontend sends 'orders' array

    // Perform validation on orderData if needed
    if (!Array.isArray(orderData) || orderData.length === 0) {
      console.error('Invalid order data:', orderData);
      return res.status(400).json({ message: 'Invalid order data' });
    }

    // Prepare orders to save
    const ordersToSave = orderData.map(order => ({
      userId: userId, // Associate with the userId
      orderData: order, // The dynamic order data from the CSV
      createdAt: new Date()
    }));

    // Insert orders in bulk to the database
    try {
      await Order.insertMany(ordersToSave);
    } catch (dbError) {
      console.error('Database error during insertion:', dbError);
      return res.status(500).json({ message: 'Failed to save orders', error: 'Database error' });
    }

    res.status(201).json({ message: 'Orders saved successfully' });
  } catch (error) {
    console.error('General error saving orders:', error);
    res.status(500).json({ message: 'Failed to save orders', error: error.message });
  }
};


const ForgotPasswordLink = async (req, res) => {};
const ForgotPassword = async (req, res) => {};
const ResetPassword = async (req, res) => {};

module.exports = {
  Register,
  Login,
  SaveOrders,
  ForgotPasswordLink,
  ForgotPassword,
  ResetPassword,
};
