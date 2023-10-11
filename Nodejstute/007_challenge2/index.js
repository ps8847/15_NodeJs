const fs = require("fs");

// 1. create a folder name it thapa
// fs.mkdir("thapa", (err) => {
//     console.log("folder created");
// });


// 2. create a file in it named it bio.txt and data into it

// fs.writeFile("thapa/read.txt", "demo textb here",
//     (err) => {
//         console.log("file is created"); //callback function
//     }
// )

// 3. add more data into the file at the end of the existing data
// fs.appendFile("thapa/read.txt", "\t demo text added at last", (err) => {
//     console.log("file is appened with text"); //callback function
// })

// 4. read the data without getting the buffer data at first
// without file encoding 
// fs.readFile("thapa/read.txt", "utf8", (err, data) => {
//     console.log(data); //callback function

// })

// 5. rename the file name to mybio.txt
// fs.rename("thapa/read.txt", "thapa/mybio.txt", (err) => {
//     console.log("file is renamed")
// });

// 6. now delete both the file and folder
// fs.unlink("thapa/mybio.txt", (err) => {
//     console.log("file is deleted")
// });
// fs.rmdir("thapa", (err) => {
//     console.log("file is deleted")
// });