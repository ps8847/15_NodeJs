const express = require("express");

const app = express();

// app.get(route, callback)

// API
// get - read
// post - create
// put - update
// delete - delete

app.get("/", (req, res) => {
    res.send("hello world from the express");
})

app.get("/about", (req, res) => {
    res.send("hello world from the about express");
})

app.listen(8000, () => {
        console.log("listening the port at 8000");
    })
    // the callback function has 2 parameters, request(req) and response(res)
    // the request object(req) represents the http request and has properties for the request query string, parameter, body, https headers, etc.

// similiarly, the response object represents the http resposne that the express app sends when it receives an http request.