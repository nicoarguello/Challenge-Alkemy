const { Router } = require("express");

const { addUsers, findUsers } = require("../controllers/users");

const router = Router();

router.post("/addUsers", addUsers);
router.get("/findUsers", findUsers)

module.exports = router;
