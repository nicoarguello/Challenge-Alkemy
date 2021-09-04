const { Router } = require("express");
const users = require("./users")
const budget = require("./budget")
const login = require("./login")

const router = Router();

router.use("/", users)
router.use("/", budget)
router.use("/", login)

module.exports = router;