const router = require("express").Router();
const contactsRoutes = require("./contacts");

// principal route
router.get("/", (req, res) => {
    res.send("Hello world!");
})

// route to JSON contacts
router.use("/contacts", contactsRoutes);

module.exports = router;