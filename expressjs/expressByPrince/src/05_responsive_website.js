const path = require("path");

const express = require("express");

const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../05_public");

app.use(express.static(staticPath))

// app.get("/", (req, res) => {
//     res.send("hello from thee expresss server");
// })

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})