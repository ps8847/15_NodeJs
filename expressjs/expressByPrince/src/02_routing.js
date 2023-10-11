const express = require("express");

const app = express();



app.get("/", (req, res) => {
    res.send("hello world from the express");
})

app.get("/about", (req, res) => {
    res.send("hello world from the about");
})

app.get("/contact", (req, res) => {
    res.send("hello world from the contact");
    // res.status(200).send("hello world from the contact");
})

app.listen(8000, () => {
    console.log("listening the port at 8000");
})