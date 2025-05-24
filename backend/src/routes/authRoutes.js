const express = require("express");
const router = express.Router();
const controller = require("../controllers/loginController");
const { verifyUser } = require("../middlewares/authMiddleware");

router.post("/login", controller.login);
router.post("/logout", verifyUser, controller.logout);

module.exports = router;
