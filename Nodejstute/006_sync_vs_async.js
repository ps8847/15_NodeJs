const fs = require("fs");


// ******   synchronus *******

// const data = fs.readFileSync("005_asynochronus_fs/read.txt", "utf-8");
// console.log(data);
// console.log("after the data");


// ********  asynchronus  ********
fs.readFile("005_asynochronus_fs/read.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("after the data");
console.log(40 + 74683 + 849 + 4764 + 6464 + 909 + 678 + 32 + 4 + 5 + 677 + 67);