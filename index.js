"use strict";

//express server
const express = require("express");
const app = express();

//cors dependencies
const cors = require("cors");

//environment variables
require("dotenv").config();

//redis connection
const { redisConn } = require("./db");
const client = redisConn();

//clear db when server is terminated (not to persist data in db)
function clearCache() {
  client.flushAll((err, reply) => {
    if (err) {
      console.error('Error clearing Redis cache:', err);
    } else {
      console.log('Redis cache cleared successfully');
    }
    client.quit(); // Quit the Redis client connection
    process.exit(0); // Terminate the process
  });
}

// Listen for the server shutdown event
process.on('SIGINT', clearCache); // For Ctrl+C
process.on('SIGTERM', clearCache); // For server termination

const receiptRoutes = require("./routes/receiptRoutes");

//logger
const logger = require("./utils/logger");

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

// Sample API to test the server
app.get("/", (req, res) => {
  res.send("Server running fine");
});


//Routes
app.use("/receipts", receiptRoutes);

//server listener
app.listen(port, () => {
  logger.info(`Server started on Port ${port}: ${__filename}`);
});
