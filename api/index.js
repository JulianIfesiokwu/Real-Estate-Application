import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, (err, res) => {
  console.log("Server is running on Port 3000");
});
