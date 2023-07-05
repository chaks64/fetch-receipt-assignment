const { createID } = require("../controllers/idController");
const { calcPoints } = require("../controllers/pointsController");

const router = require("express").Router();

router.post("/process",createID)
router.get("/:id/points", calcPoints)

module.exports = router