const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: String
});

const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    body: String,
    image: String,
    user: String
});

const userModel = mongoose.model("user", userSchema);
const postModel = mongoose.model("post", postSchema);

module.exports = {userModel, postModel};