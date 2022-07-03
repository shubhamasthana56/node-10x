var readline = require('readline');
  
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('What is your name? ', (name) => {
    console.log('Your name is: ' + name);
});

rl.on('line', (input) => {
    console.log(`Input Received: ${input}`);
    rl.close();
});
//command line arguments can be passed on file execution 

//Reading command line arguments from process

console.log(process.argv);


