import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();

// ALLOW US USE JSON
app.use(express.json());

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

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// ERROR MIDDLEWARE
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
});
