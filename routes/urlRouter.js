const express = require("express");
const {validateLogin} = require("../middleware/auth")
const {redirectUrlById, getAllUrls, addUrl} = require("../controller/urlController");

const router = express.Router();

router
.route("/")
.get(validateLogin, getAllUrls)
.post(validateLogin, addUrl)

router
.route("/:id")
.get(redirectUrlById)

module.exports= router;