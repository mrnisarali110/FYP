const Joi = require("joi");

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})"
);

// Define the Joi schema for validation
const userRegistrationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).min(8).required(),
  email: Joi.string().email().required(),
  storeName: Joi.string().min(3).max(30).required(),
  storeUrl: Joi.string().uri().required(),
  phone: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .required(),
  cnic: Joi.string()
    .pattern(/^[0-9]{13}$/)
    .required(),
});

module.exports = userRegistrationSchema;
