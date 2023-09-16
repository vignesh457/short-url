const express = require("express");
const {validateLogin} = require("../middleware/auth")
const {viewLandingPage} = require("../controller/staticController")

const router = express.Router();

router
.get("/", validateLogin, viewLandingPage)

module.exports= router;