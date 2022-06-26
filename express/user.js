const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res)=> {
    res.send("User route")
});

router.get("/update", (req, res)=> {
    res.send("User updating route")
});

router.post("/createuser", (req, res)=> {
    users.push(req.body)
    res.send(`${req.body.username} created sucessfully`)
});

router.post("/login", (req, res)=> {
    users.forEach((user)=> {
        if(user.username === req.body.username) {
            if(user.password === req.body.password) {
                res.send(`${req.body.username} logged in successfully`);
            } else {
                res.send("Incorrect password");
            }
        } else {
            res.send("User not found");
        }
    });
});

module.exports = router;