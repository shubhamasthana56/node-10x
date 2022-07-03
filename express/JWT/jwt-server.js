require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authController = require("./auth");

//starting mongodb server
app.listen(process.env.JWT_PORT, (err)=> {
    if(!err) {
        console.log(` Server started on ${process.env.JWT_PORT}`)
    }
});

//Body JSON and Urlencoding support
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Database connection
mongoose.connect("mongodb://localhost/userdb", ()=> {
    console.log("Connected to database")
},(err)=> {
    console.log(err)
});

//middleWare
app.use("/auth", authController);