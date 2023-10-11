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

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});


app.listen(port, () => {
    console.log("listeningg on port" + port);
})