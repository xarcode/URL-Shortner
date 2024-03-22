// import mongoose from "mongoose";
// import dotenv from "dotenv";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
      console.log("Database connection failed", error);
    console.log(error);
  }
}

module.exports = dbConnection;