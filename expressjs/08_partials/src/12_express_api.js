// domain.com/shoes?type=sneakers&sort=price_ascending


const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
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
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=a6829334fb8034c828fd03c09613b5e6`, ).on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            console.log(`city name is : ${arrdata[0].name} and the temp is : ${Math.round(arrdata[0].main.temp / 10 )}`);
            // console.log(arrdata);

            res.write(arrdata[0].name);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to error", err);
            console.log("end");
            res.end();
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