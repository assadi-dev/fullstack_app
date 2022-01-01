const { apiLimiter } = require("../middlewares/apiLimiter");
const validate = require("../middlewares/validate");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/login", userController.login);
router.get("/me", validate, userController.me);
module.exports = router;