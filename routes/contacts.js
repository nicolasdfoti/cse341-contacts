const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");
const { validateContact } = require("../validation/contacts");
const handleValidationErrors = require("../middleware/validationHandler");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

router.post(
    "/", 
    validateContact,
    handleValidationErrors,
    contactsController.createContact);

router.put(
    "/:id",
    validateContact,
    handleValidationErrors,
    contactsController.updateContact);

router.delete("/:id", contactsController.deleteContact);

module.exports = router;