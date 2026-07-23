const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

mongoose
  .connect("mongodb://mongodb:27017/testdb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("🚀 Docker Mini Project is Running Successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});