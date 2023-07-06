const redis = require("redis");
const logger = require("./utils/logger");
require("dotenv").config();

const redisConn = () => {
  const client = redis.createClient({
    host: process.env.redisIP || "127.0.0.1", // This should be the name of the Redis container
    port: process.env.redisPort || 6379, // Default Redis port
    legacyMode: true,
  });
  client.connect();
  client.on("connect", () => {
    logger.info(`Connected to Redis: ${__filename}`);
  });

  client.on("error", (err) => {
    logger.error(`Redis connection error: ${__filename}`);
  });

  return client;
};

function clearCache() {
  client.flushall((err, reply) => {
    if (err) {
      logger.error(`Error clearing Redis cache: ${__filename}`, err);
    } else {
      logger.info(`Redis cache cleared successfully: ${__filename}`);
    }
    client.quit(); // Quit the Redis client connection
    process.exit(0); // Terminate the process
  });
}

module.exports = { redisConn, clearCache };
