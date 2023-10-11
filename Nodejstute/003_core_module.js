// consider modules to be the same as js libraries. a set of functions you want to include in your application

// nodejs has a set of build-in modukes which you can use without any further installation


// const name = "prince";

// console.log(name);



// 1. creating a new file
const fs = require("fs");
// fs.writeFileSync("read.txt", "this is demo text");

// 2. appending File
// fs.appendFileSync("read.txt", "\t \n this is second demo line by appending data");

// 3. read file 
const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// output : <Buffer 74 68 69 73 20 69 73 20 64 65 6d 6f 20 74 65 78 74 74 68 69 73 20 69 73 20 73 65 63 6f 6e 64 20 64 65 6d 6f 20 6c 69 6e 65 20 62 79 20 61 70 70 65 6e ... 55 more bytes>
// // node js includes an additional data type called buffer
// // buffer is mainly used to store binary data
// // while reading from a file or receiving pavkets over the network

org_data = buf_data.toString();
console.log(org_data);

// 4. rename the file 
// fs.renameSync("read.txt", "read_write.txt");