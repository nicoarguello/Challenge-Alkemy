const { Router } = require("express");
const users = require("./users")
const budget = require("./budget")

const router = Router();

router.use("/", users)
router.use("/", budget)

module.exports = router;