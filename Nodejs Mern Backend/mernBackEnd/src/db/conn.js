require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is successfull with db");
}).catch((e) => {
    console.log("no connection between db");
})