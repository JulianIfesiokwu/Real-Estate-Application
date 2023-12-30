import express from "express";

const app = express();

app.listen(3000, (err, res) => {
  console.log("Server is running on Port 3000");
});
