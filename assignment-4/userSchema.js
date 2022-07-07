const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    isPromoted: Boolean
});

const userModal = mongoose.model("user", userSchema);

module.exports = userModal;