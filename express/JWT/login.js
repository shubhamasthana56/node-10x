const express = require("express");
const router = express.Router();
const {userInfo} = require("../mongoose/modal/user-modal");
const bcrypt = require("bcryptjs");

router.post("/login", (req, res)=> {
    userInfo.find({username: req.body.username}).then((user)=> {
        if(user.length) {
            bcrypt.compare(req.body.password,user[0].password).then((val)=> {
                if(val) {
                    res.status(200).send("User Loggedin Successfully")
                } else {
                    res.status(401).send("Invalid Password")
                }
            })
        } else {
            res.status(401).send(`${req.body.username} dont exist`)
        }
    })
});

module.exports = router;