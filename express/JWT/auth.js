const express = require("express");
const router = express.Router();
const {userInfo} = require("../common/modal/user-modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


//Get secretkey 64 hexadecimal string 
//payload
const generateSecretKey = ()=> {
    return crypto.randomBytes(64).toString("hex");
}
router.post("/login", (req, res)=> {
    userInfo.find({username: req.body.username}).then((user)=> {
        if(user.length) {
            bcrypt.compare(req.body.password,user[0].password).then((val)=> {
                if(val) {
                    const secret = generateSecretKey();
                    const authToken = jwt.sign(user[0].username, secret);
                    res.status(200).send({authToken});
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