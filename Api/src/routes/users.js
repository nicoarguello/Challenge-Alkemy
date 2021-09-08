const { Router } = require("express");

const {verifyToken} = require("../controllers/login")

const { addUsers, findUsers, findUser } = require("../controllers/users");

const router = Router();

router.post("/addUsers", addUsers);
router.get("/findUsers", findUsers)
router.get("/findOneUser", findUser)

module.exports = router;
