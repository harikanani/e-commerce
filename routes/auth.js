const express = require("express");
const AuthController = require("../controllers/AuthController")

const router = express.Router();

router.post("/auth/regsiter", AuthController.register);
router.post("/auth/login", AuthController.login);

module.exports = router