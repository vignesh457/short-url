const jwt = require("jsonwebtoken")
const secret_id = "alkfjkaldsjfk";

exports.encodeJWT = (user)=>{
    return jwt.sign({
        _id: user.id,
        email: user.email
    }, secret_id);
}
exports.decodeJWT = (id)=>{
    return jwt.verify(id, secret_id);
}
