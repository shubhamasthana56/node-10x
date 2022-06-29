const express = require("express");
const userInfo = require("./modal/user-modal");

const router = express.Router();

// router.get("/", (req, res)=> {
//     userInfo.find().then((user)=> {
//         res.send(user)

//     })
    
// });


// router.post("/createuser", (req, res)=> {
//     userInfo.create({username:req.body.username, password: req.body.password}).then((user)=> {
//         console.log(user)
//         res.send(`${user.username} created sucessfully`)
//     }).catch((error)=> {
//         console.log(err)
//     })
//    // 
// });

// router.post("/login", (req, res)=> {
    
//     users.forEach((user)=> {
//         if(user.username === req.body.username) {
//             if(user.password === req.body.password) {
//                 res.send(`${req.body.username} logged in successfully`);
//             } else {
//                 res.send("Incorrect password");
//             }
//         } else {
//             res.send("User not found");
//         }
//     });
// });

router.post("/createuser", (req,res)=> {
    userInfo.create({username: req.body.username, password: req.body.password}).then((user)=> {
        res.send(`${user.username} created successfully`);
    }).catch((err)=> {
        console.log(err);
    })
});
router.get("/list",(req,res)=> {
    userInfo.find().then((userData)=> {
        res.send(userData);
    });
});
router.put("/resetpassword",(req, res)=> {
    userInfo.updateOne({username: req.body.username}, {password: req.body.newpassword}).then((data)=> {
        res.send(`Password updated succesfully`)
    });
});

router.delete("/delete/:name/:second",(req, res)=> {
    userInfo.deleteOne({username: req.params.name }).then((data)=> {
       res.send("User deleted Successfully")
    })
});
router.get("/download",(req,res)=> {
    const file = `${__dirname}/user.txt`;
    res.download(file);
});


module.exports = router;