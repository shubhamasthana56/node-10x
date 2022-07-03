const bcrypt = require("bcryptjs");

const password = "shubham";
const salt = 10;
let hash =""

bcrypt.genSalt(salt, (saltErr, saltValue)=> {
    if(saltErr) {
        return err
    } else {
        bcrypt.hash(password, saltValue, (hashErr, hashValue)=> {
           bcrypt.compare("shubham", hashValue, (err, value)=> {
               console.log(value);
           })
        });
    }
});
//JWT

