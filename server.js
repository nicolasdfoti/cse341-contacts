const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// routes
const routes = require("./routes");
app.use("/", routes);

// app listening to the port
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})