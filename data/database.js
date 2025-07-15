const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require("mongodb").MongoClient;

let database;

const initDb = (callback) => {

    if (database) {
        console.log("DB is already initialized");
        return callback(null, database);
    } else {

        MongoClient.connect(process.env.MONGODB_URI)
            .then((client) => {
                database = client;
                callback(null, database);
                console.log("Database initialized");
            })
            .catch((err) => {
                callback(err);
            })
    }
}

const getDb = () => {
    if (!database) {
        throw Error("Database already initialized");
    } else {
        return database;
    }
}

module.exports = {initDb, getDb};