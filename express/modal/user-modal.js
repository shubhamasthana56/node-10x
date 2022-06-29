const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    username: String,
    password: String
});
module.exports = mongoose.model("userInfo", userInfoSchema);