const fs = require("fs");

fs.readdir("./testing-symbol",{withFileTypes: true},(err,files)=> {
    if(err) {
        console.log(err);
    }
    files.forEach((file)=> {
        const type = file.isFile() ? '📄' : '📂' 
        console.log(type, file.name);
    })
});