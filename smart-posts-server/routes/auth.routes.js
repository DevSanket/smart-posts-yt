const express = require("express");
const { Login } = require("../controllers/auth.controller");
const router = express.Router();

router.post('/', Login);

module.exports = router;
