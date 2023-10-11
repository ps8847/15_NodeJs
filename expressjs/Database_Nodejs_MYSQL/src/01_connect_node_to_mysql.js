// first install >>  npm install mysql

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "youtubestudent"
});

con.connect(function(error) {
    if (error) throw error;
    // console.log("connected!!");

    con.query("select * from customers", function(error, result) {
        if (error) throw error;
        // console.log(result);  FULL DATA
        console.log(result[0]); //only first row
        console.log(result[0].cname); // particular data

    });
});