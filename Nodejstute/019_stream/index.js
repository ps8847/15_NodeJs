//2nd way
// reading from a stream
// create a readable stream
// handle stream events --> data, end, and error

const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

    // first way
    //     fs.readFile("input.txt", function(err, data) {
    //         if (err) return console.error(err);
    //         res.end(data.toString());
    //     });
    // });

    // second way
    // reading from a stream
    // create a readable stream
    // handle stream events --> data, end and error


    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", (err) => {
    //     res.end("file not found");
    // });

    // third way

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});


server.listen(8000, "127.0.0.1");



// pipe method (shorcut for all the code which we wrote above)