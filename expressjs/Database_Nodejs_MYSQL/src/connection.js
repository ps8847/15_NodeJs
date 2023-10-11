var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    // database: "youtubestudent",   // for the firdt video 
    database: "college"
});

module.exports = con;