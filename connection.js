const mongoose = require("mongoose")
require("dotenv").config();

mongoose.connect(process.env.ATLAS_URL)
.then(()=>console.log("DB connection successful"));

module.exports = mongoose;