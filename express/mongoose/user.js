const express = require("express");
const {userInfo} = require("./modal/user-modal");

const router = express.Router();
const path = require("path");
const bcrypt = require("bcryptjs");
const salt = 10;



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

const checkExistingUser = async(userName)=> {
    let userExist = false;
    await userInfo.find({username: userName}).then((user)=> {
        if(user.length) {
            userExist = true;
        }
        // for(let i=0;i<users.length;i++) {
        //     if(userName.toLowerCase() === users[i].username.toLowerCase()) {
        //         userExist = true;
        //         break;
        //     }
        // }
    }).catch((err)=> {
        console.log(err, "err")
    } );
    return userExist;
}
router.get("/",(req, res)=> {
    res.render("form")
})
router.post("/createuser", async(req,res)=> {
    console.log(req.body, req.params, req.query);
    if(await checkExistingUser(req.body.username)) {
        res.status(400).send(`${req.body.username} already exist`)
    } else {
        bcrypt.genSalt(salt, (saltErr, saltValue)=> {
            if(saltErr) {
                return err
            } else {
                bcrypt.hash(req.body.password, saltValue, (hashErr, hashValue)=> {
                    userInfo.create({username: req.body.username, password: hashValue}).then((user)=> {
                        //res.status(200).send(`${user.username} created successfully`);
                        res.redirect("/user/list");
                    }).catch((err)=> {
                        res.status(400).send(err.message)
                    })
                });
            }
        });
        
    }
    
});
router.get("/list",(req,res)=> {
    userInfo.find().then((userData)=> {
        res.render("user", {users: userData});
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