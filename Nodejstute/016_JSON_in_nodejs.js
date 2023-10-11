// // json stands for javascript object Notiation. json is a lightweight format for storing and transporting DataTransfer.applyjson is often used when data is send from a sevrer to a web page...

// const biodata = {
//     name: "prince",
//     age: 22,
//     city: "asr"
// };



// console.log(biodata.city);

// const jsondata = JSON.stringify(biodata);
// console.log(jsondata);
// //  output =  {"name":"prince","age":22,"city":"asr"}

// // console.log(jsondata.city);   cant do this thing

// const objdata = JSON.parse(jsondata);
// console.log(objdata.city);




// 1. convert to json
// 2. dusre file me add kardena
// 3. readfile
// 4. again convert back to js obj ori
// 5. console.log

const fs = require("fs");
const biodata = {
    name: "prince",
    age: 22,
    city: "asr"
};

const jsondata = JSON.stringify(biodata);
fs.writeFile("016_demo_json1.json", jsondata, (err) => {
    console.log("done");
});

// now that file will be treated as API

fs.readFile("016_demo_json1.json", "utf-8", (err, data) => {
    // console.log(data);
    const orgdata = JSON.parse(data);
    console.log(orgdata);
})