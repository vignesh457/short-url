const {decodeJWT} = require("../service/auth")

exports.validateLogin = (req, res, next)=>{
    const cookieId = req.cookies?.uid;
    if(!cookieId || !decodeJWT(cookieId)){
        return res.redirect("/user/signup")
    }
    const user = decodeJWT(cookieId);
    req.user = user;
    next();
}