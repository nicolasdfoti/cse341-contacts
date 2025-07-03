const express = require("express");
const mongodb = require("./data/database");

const app = express();

const PORT = process.env.PORT || 3000;

// routes
const routes = require("./routes");
app.use("/", routes);

// database
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    
    } else {
        
        // app listening to the port
        app.listen(PORT, () => {
            console.log(`running on port ${PORT}`);
        })
    }
})