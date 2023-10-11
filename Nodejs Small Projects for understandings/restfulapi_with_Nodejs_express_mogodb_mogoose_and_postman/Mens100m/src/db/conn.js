const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is successfull with db");
}).catch((e) => {
    console.log("no connection between db");
})