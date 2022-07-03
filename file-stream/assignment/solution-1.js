const fs = require("fs");
fs.readFile("test1.txt","utf-8",(err, data)=> {
    if(err) {
        console.log(err)
        return
    } else {
        fs.writeFile("test2.txt", data,(err)=> {
            if(err) {
                console.log(`Error in writing file: ${err}`)
            }
        })
    }
});