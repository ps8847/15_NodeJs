// make a folder name "views" compolsory

//rest inside that  >>>> it can be changed     ... write 
// const templateath = path.join(__dirname, "../cjnagedname of view")
// app.set("views", templateath);

//adter this much of code ewe ccan change the views name


const path = require("path");

const express = require("express");

const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../05_public");

//to set the view engine
app.set("view engine", "hbs");

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        channelname: "Prince",
    });
});

// app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.send("hello from thee expresss server");
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})