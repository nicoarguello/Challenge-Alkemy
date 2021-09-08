const { Router } = require("express");
const { addBudget, findBudget } = require("../controllers/budget");
const {verifyToken} = require("../controllers/login")

const router = Router();

router.post("/addBudget", verifyToken, addBudget);
router.get("/findBudget/:id", findBudget)

module.exports = router;
