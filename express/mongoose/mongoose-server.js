require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejs = require("ejs");
const userController = require("./user");
const app = express();

//setuping view engine
app.set("view engine", "ejs");

//express server start
app.listen(3001, (err)=> {
    if(!err) {
        console.log(` Server started on 3001`)
    }
});

//Database connnection
mongoose.connect("mongodb://localhost/userdb").then(()=> {
    console.log("Connected to db")
}).catch((err)=> {
    console.log(err)
})

//Body parser to support JSON and form encoding
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/",(req, res)=> {
    res.sendFile(path.join(__dirname + '/html-pages/index.html'))
});

app.get("/about",(req, res)=> {
    res.sendFile(path.join(__dirname + '/html-pages/about.html'))
});

//middleware
app.use("/user", userController);