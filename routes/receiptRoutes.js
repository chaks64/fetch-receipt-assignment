const { createID } = require("../controllers/idController");

const router = require("express").Router();

router.post("/process",createID)

module.exports = router