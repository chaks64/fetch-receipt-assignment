const { v4: uuidv4 } = require("uuid");
const { redisConn } = require("../db");
const { validateReceipt } = require("../utils/validateReceipt");
const client = redisConn();

module.exports.createID = async (req, res, next) => {
  try {
    const receipt = req.body;
    const id = uuidv4();

    if(!validateReceipt(receipt)){
        res.status(400).json({ error: "The receipt is invalid" });
    }

    client.set(id, JSON.stringify(receipt), (err) => {
      if (err instanceof TypeError && err.message === "Invalid argument type") {
        res.status(400).json({ error: err.message || "Invalid receipt" });
      } else if (err) {
        res.status(500).json({ error: err.message || "Internal Server Error" });
      } else {
        res.status(200).json({ id });
      }
    });
  } catch (error) {
    next(error)
  }
};
