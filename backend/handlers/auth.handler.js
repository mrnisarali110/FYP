const ExpressJoiValidation = require("express-joi-validation");
const Joi = require("joi");
const User = require("../schema/user");
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
  console.log("Login request received", req.body); // Log the request body

  const { email, password } = req.body;

  // Validate the login credentials
  const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const loginValidation = await loginSchema.validate(req.body);
  if (loginValidation.error) {
    console.log("Login validation failed", loginValidation.error.details); // Log validation errors
    const errorResponse = loginValidation.error.details.reduce((acc, err) => {
      const key = err.context.key;
      const message = err.message.replace(/"/g, ""); // Remove the extra quotes
      acc[key] = message;
      return acc;
    }, {});

    return res.status(200).json(errorResponse);
  }

  console.log("Login validation passed, checking user in DB...");

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" });
  }

  console.log("User found, verifying password...");

  // Compare the password
  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    console.log("Invalid password");
    return res.status(401).json({ message: "Invalid password" });
  }

  console.log("Password valid, generating token...");

  // Generate token
  const token = await user.generateToken();

  console.log("Login successful, token generated:", token);

  res.json({ token, message: "User logged in successfully" });
};



const ForgotPasswordLink = async (req, res) => {};
const ForgotPassword = async (req, res) => {};
const ResetPassword = async (req, res) => {};

module.exports = {
  Register,
  Login,
  ForgotPasswordLink,
  ForgotPassword,
  ResetPassword,
};
