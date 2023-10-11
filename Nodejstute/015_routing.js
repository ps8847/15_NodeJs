// demo 1
// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.end("hello from the other sides");
// });

// server.listen(8000, "127.0.0.1", () => {
//     console.log("listening to the port no 8000");
// });

// with this much of code we can simplly run this first....after that go to browser and type anything after /jcjksh...and we will et that msg here in console

//demo2
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        // res.end("hello from the home sides");
        //or
        res.write("hello from the home sides")
    } else if (req.url == "/about") {
        res.end("hello from the aboutus sides");
    } else if (req.url == "/contact") {
        res.end("hello from the contact sides");
    } //if we will nit give any else block then by typing /bcjshjf  the browser will keep running and running and running
    else {
        res.writeHead(404, { "Content-type": "text/html" }); //without this the browser will treat this else block as new data for page..but we kow that this data is nit page basically.... to let the browser understand about this we give this
        res.end("<h1>404 Error page. page does not exits</h1>");
    }


});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});