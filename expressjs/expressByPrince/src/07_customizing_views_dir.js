// make a folder name "views" compolsory

//rest inside that  >>>> it can be changed     ... write 
// const templateath = path.join(__dirname, "../cjnagedname of view")
// app.set("views", templateath);

//adter this much of code ewe ccan change the views name



const express = require("express");

const app = express();
const port = 8000;


app.set("view engine", "hbs");

// template engine route
app.get("/contact", (req, res) => {
    res.render("contact");
});


app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})