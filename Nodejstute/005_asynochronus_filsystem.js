const fs = require("fs");


// 1. create file 
fs.writeFile("005_asynochronus_fs/read.txt", "demo textb here",
    (err) => {
        console.log("file is created"); //callback function
    }
)

// 2.appendfile 
fs.appendFile("005_asynochronus_fs/read.txt", "\t demo text added at last", (err) => {
    console.log("file is appened with text"); //callback function
})

// 3. read data
fs.readFile("005_asynochronus_fs/read.txt", "utf8", (err, data) => {
    console.log(data); //callback function
})