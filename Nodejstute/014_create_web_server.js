// node js provides capabilities to ceate your own web server which will handle http requests asynchronously. you can use iis or apache to run node.js web application but it is recommended to use node.js web server


// the http.createserver() method includes request and response parameters which is supplied by node.js

// the request object can be used to get information about the current http request
//eg:.. url, request header and data

//the response object can be used to send a current http request

//if the response from the http server is suppossed to be displayeda shtml, you should include an Http Header with the correct content type:



//starting with it
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hello from the other sides");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});

// after this much of code..simply run it .... after that go to browser and type localhost:8000