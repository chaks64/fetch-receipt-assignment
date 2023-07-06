const logger = require("../utils/logger");
const { redisConn } = require("../db");
const { calculatePoints } = require("../utils/calcPoints");
const client = redisConn();

module.exports.calcPoints = async (req, res, next) => {
  try {
    const key = req.params.id;
    client.get(key, (err, value) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      if (value) {
        let points = calculatePoints(JSON.parse(value));
        res.status(200).json({ points });
      } else {
        res.status(404).json({ error: "No receipt found for that id" });
      }
    });
  } catch (error) {
    next(error);
  }
};