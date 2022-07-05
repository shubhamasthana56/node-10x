const fs = require("fs");
const http = require("http");
const content = `<h1> Hello World </h1>
             <p> This is {Your Name}... </p>`;
fs.writeFile(`${__dirname}/index.html`, content, (err,val)=> {
    if(!err) {
        console.log("File created successfully");
    }
});
const requestListener = (req,res)=> {
    //write head passes the header vs write just passes value
    fs.readFile(`${__dirname}/index.html`, (err, data)=> {
        if(!err) {
        res.writeHead(200, {
        "Content-type": "text/html"
        });
        res.write(data);
        res.end();
        } else {
            console.log(err)
        }
    });
    
}
const server = http.createServer(requestListener);
server.listen(5000);



