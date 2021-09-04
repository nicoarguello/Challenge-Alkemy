const { Router } = require("express");
const { addBudget } = require("../controllers/budget");

const router = Router();

router.post("/addBudget", addBudget);


module.exports = router;
