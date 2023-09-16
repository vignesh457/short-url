const express = require("express");
const {addUser, viewSignupPage, viewLoginPage, verifyUser} = require("../controller/userController");

const router = express.Router();

router
.route("/signup")
.get(viewSignupPage)
.post(addUser)

router
.route("/login")
.get(viewLoginPage)
.post(verifyUser)





module.exports= router;