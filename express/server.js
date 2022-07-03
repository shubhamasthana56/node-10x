const express = require("express");
const path = require("path");
const http = require("http");
const mongoose = require("mongoose");
const ejs = require("ejs");
//__dirname __file
const app = express();
app.set("view engine", "ejs");
const userController = require("./mongoose/user");
app.listen(3001);

mongoose.connect("mongodb://localhost/userdb", ()=> {
    console.log("Connected to database")
},(err)=> {
    console.log(err)
});

const text = "Shubham";

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get("/",(req, res)=> {
    res.sendFile(path.join(__dirname + '/views/index.html'))
});

app.get("/about",(req, res)=> {
    res.sendFile(path.join(__dirname + '/views/about.html'))
});


//middleware
app.use("/user", userController);

////


