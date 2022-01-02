const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/users", userController.get_users);
router.post("/user", userController.create_users);

module.exports = router;