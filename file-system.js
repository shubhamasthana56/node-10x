const fs = require('fs');
//Async approach or noblocking approach
console.log("File Reading started")
fs.readFile("test1.txt", 'utf-8', (err, fileData)=> {
   if(err) {
    console.log(err);
   } else {
      console.log(fileData) 
   }
});
console.log("File Reading ended")
//blocking code
console.log("File Reading started");
//blocking user node execution
let data;
try {
    data = fs.readFileSync('test1.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err)
}
console.log("File Reading ended");

//Promise Approach
// fs.readFile("test1.txt","utf-8").then((data)=> {
//     console.log(data)
// }).catch((err)=> {
//     console.log(err)
// })

//async await approach
// async function getData() {
//     const fileData = await fs.readFile("test.txt", "utf-8");
//     console.log(fileData);
// }
//getData();
//create new file
const content = `I am student of 10x\nits multiline content`
fs.writeFile("test2.txt",content, (err, data)=> {
    console.log(err, data);
});
//Read dir
fs.readdir("./",{withFileTypes: true},(err, files)=> {
    if(err) {
        console.log(err)
    } else {
         files.forEach((file)=> {
             const type = file.isDirectory();
             console.log(type);
    })
    }
});
//creating new dir
fs.mkdir("./test-mkdir",(err)=> {
    if(err) {
        console.log(err);
        return 
    }
    console.log("Directory created successfully");
})

//Deleting directory 
fs.rmdir("./test-mkdir", (err)=> {
    if(err) {
        return err
    }
    console.log("Directory deleted Sucessfully")
})

//Appending content in file
 fs.appendFile("test2.txt", `\nNewData Appended`, (err)=> {
     if(err) {
         console.log(err)
         return
     }
     console.log("Data added")
 })

//Deleting file
fs.unlink('testing-symbol', (err)=> {
    if(err) {
        console.log(err)
        return
    }
    console.log("File Deleted");
})

