const express = require("express");
const app = express();
app.listen(3001);

app.get("/",(req, res)=> {
    console.log(req.query);
    const userData = [{
        firstName: "Shubham",
        age: 23
    },
    {firstName: "shubham1", age:24}
]
    const filteredUserData = userData.filter((user)=> {
        return user.firstName.includes(req.query.name)
    })
    console.log(filteredUserData)
    res.send(filteredUserData);
});

////


