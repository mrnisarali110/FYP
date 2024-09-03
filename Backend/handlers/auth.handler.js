const ExpressJoiValidation = require("express-joi-validation");
const Joi = require("joi");
const User = require("../schema/user");
const userRegistrationSchema = require("../validations/registration");

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
const Login = async (req, res) => {};
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
