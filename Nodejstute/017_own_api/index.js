const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const data = fs.readFileSync("myapi.json", "utf-8");
    const objdata = JSON.parse(data);

    if (req.url == "/") {
        res.write("hello from the home sides")
    } else if (req.url == "/about") {
        res.end("hello from the aboutus sides");
    } else if (req.url == "/contact") {
        res.end("hello from the contact sides");
    } else if (req.url == "/userapi") {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end(objdata[0].name);

    } else {
        res.end("<h1>404 Error page. page does not exits</h1>");
    }


});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});