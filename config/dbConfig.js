const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

// Testing if our server is connected or not
connection.on("connected", () => { 
    console.log("DB is connected");
});

// Checking if our server has any errors
connection.on("error", (error) => {
    console.log("Error in the DB", error);
});

module.exports = mongoose;
