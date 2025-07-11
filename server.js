const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("./data/database");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

// routes
const routes = require("./routes");
app.use("/", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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