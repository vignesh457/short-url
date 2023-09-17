const mongoose = require("../connection")
const {Schema, model} = mongoose;

const urlSchema = new Schema({
    short_id: {
        type: String,
        required: true
    },
    redirect_url: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const URL = model("URL", urlSchema);

module.exports = URL;