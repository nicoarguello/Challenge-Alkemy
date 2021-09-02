const { Router } = require("express");

const { addUsers } = require("../controllers/users");

const router = Router();

// router.get();
router.post("/addUsers", addUsers);

module.exports = router;
