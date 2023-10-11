// domain.com/shoes?type=sneakers&sort=price_ascending


const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;


const staticPath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const Partialspath = path.join(__dirname, "../templates/partials");


app.set("view engine", "hbs");
app.set("views", templatepath);

hbs.registerPartials(Partialspath);

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index", {
        name: "Prince Sharma",
        channel: "codebyPrince"
    })
})


// 11 video code
app.get("/about", (req, res) => {
    // console.log(req.query.name);
    res.render("about", {
        name: req.query.name,
        age: req.query.age,
    });
});

app.get("/contact", (req, res) => {
    res.render("contact");
});


//404 error wala code
app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "404 page not  found inside about",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "404 page not  found",
    });
})

// app.get('*', (req, res) => {
//     res.render('404', {
//         errorcomment: "404 page not found",
//     });
// });


app.listen(port, () => {
    console.log("listeningg on port" + port);
})