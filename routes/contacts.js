const express = require("express");
const router = express.Router();

router.get("/contacts", (req, res) => {
  res.send("Hola!!");
});

module.exports = router;