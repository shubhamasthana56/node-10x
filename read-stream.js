const fs = require("fs");
const startTime = new Date();
const rstream = fs.createReadStream("test1.txt");
let total = 1;

rstream.on('data', (d)=> {
    console.log(d.toString())
    total += d.toString().split(/[\s\n]+/).length-1
});

rstream.on("end",()=> {
    console.log("Total words", total);
    console.log("Total time",new Date() - startTime);
})