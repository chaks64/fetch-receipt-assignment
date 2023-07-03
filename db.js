const redis = require("redis");
const logger = require("./utils/logger");

const redisConn = () => {
  const client = redis.createClient({
    host: "redis-test", // This should be the name of the Redis container
    port: 6379, // Default Redis port
    legacyMode: true,
  });
  client.connect();
  client.on("connect", () => {
    logger.info(`Connected to Redis ${__filename}`);
  });

  client.on("error", (err) => {
    console.error("Redis connection error:");
  });

  return client;
};

function clearCache() {
  client.flushall((err, reply) => {
    if (err) {
      console.error("Error clearing Redis cache:", err);
    } else {
      console.log("Redis cache cleared successfully");
    }
    client.quit(); // Quit the Redis client connection
    process.exit(0); // Terminate the process
  });
}

module.exports = { redisConn, clearCache };
