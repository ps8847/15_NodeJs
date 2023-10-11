const express = require("express");

const app = express();



app.get("/", (req, res) => {
    res.send("<h1>hello world from the express</h1>"); // with html eleemnt
    //or
    // res.write("<h1>hello world from the express</h1>");
    // res.write("<h1>hello world from the express 2nd time</h1>");
    res.send();

})

app.get("/about", (req, res) => {
    res.send("hello world from the about");
})

app.get("/contact", (req, res) => {
    res.send("hello world from the contact");
    // res.status(200).send("hello world from the contact");
})

app.get("/temp", (req, res) => {
    // res.send({
    //     id: 1,
    //     name: "prince",
    // });

    res.send([{
            id: 1,
            name: "prince",
        },
        {
            id: 1,
            name: "prince",
        },
        {
            id: 1,
            name: "prince",
        },


    ]);
});


app.get("/temp", (req, res) => {
    // res.send({
    //     id: 1,
    //     name: "prince",
    // });

    res.json([{
            id: 1,
            name: "prince",
        },
        {
            id: 1,
            name: "prince",
        },
        {
            id: 1,
            name: "prince",
        },


    ]);
});

// the methods are identical when an object or array is passed but res.json() will also convert non-objects, such a snull and undefiened, which are not valid JSON


app.listen(8000, () => {
    console.log("listening the port at 8000");
})