const express = require("express");
const path = require("path");
const http = require("http");
//__dirname __file
const app = express();
const userController = require("./user");
app.listen(3001);
// http.createServer((req, res)=> {
//     res.end()
// }).listen(5000)
const text = "Shubham";

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get("/",(req, res)=> {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get("/about",(req, res)=> {
    res.sendFile(path.join(__dirname + '/about.html'))
});


//middleware
app.use("/user", userController);

////


