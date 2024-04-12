const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB. 🚀");
    return mongoose.connection;
  } catch (error) {
    console.log("Error while connecting to DB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
