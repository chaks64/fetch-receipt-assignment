"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Sample API to test the server
app.get("/", (req, res) => {
  const data = {
    message: "Server running test",
  };
  res.json(data);
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});
