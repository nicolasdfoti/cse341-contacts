const { body } = require("express-validator");

exports.validateContact = [
    body("firstName").trim().notEmpty().withMessage("First Name is mandatory"),
    body("lastName").trim().notEmpty().withMessage("Last Name is mandatory"),
    body("email").trim().notEmpty().isEmail().withMessage("Invalid email"),
    body("favoriteColor").trim().notEmpty().isIn(["red", "blue", "green"]).withMessage("Invalid favorite color"),
    body("birthday").trim().notEmpty().isISO8601().withMessage("Invalid birthdate")
]