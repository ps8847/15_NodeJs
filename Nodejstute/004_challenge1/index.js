const fs = require("fs");

// 1. create a folder name it thapa
// fs.mkdirSync("thapa");

// 2. create a file in it named it bio.txt and data into it
// fs.writeFileSync("thapa/bio.txt", "my name is prince sharma");

// 3. add more data into the file at the end of the existing data
// fs.appendFileSync("thapa/bio.txt", "\t adding more data at end");

// 4. read the data without getting the buffer data at first
// without file encoding 
// const data = fs.readFileSync("thapa/bio.txt", "utf8");
// console.log(data);

// 5. rename the file name to mybio.txt
// fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");

// 6. now delete both the file and folder
// fs.unlinkSync("thapa/mybio.txt");
// fs.rmdirSync("thapa");