const User = require("../model/User");
const {encodeJWT} = require("../service/auth")

exports.addUser = async(req, res)=>{
    try{
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        console.log('before')
        const cookieId = encodeJWT(user);
        console.log('after')
        res.cookie("uid",cookieId);

        res.redirect("/");
    }
    catch(err){
        res.redirect("/user/login")
    }
}

exports.viewSignupPage = (req, res)=>{
    res.render("signup");
}

exports.verifyUser = async(req, res)=>{
    try{
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if(!user){
            res.render("login");
        }
        const cookieId = encodeJWT(user);
        res.cookie("uid",cookieId);
        res.redirect("/");
    }
    catch(err){
        res.render("login");
    }
}

exports.viewLoginPage = (req, res)=>{
    res.render("login");
}
