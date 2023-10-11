// create db and reguster form

// set routes 

// insert form data to mysl (3 ways)


// make a file >>> register.html

var con = require("./connection");
var express = require("express");

var app = express();

var bodyparser = require('body-parser') //used to read the data from url (forms)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



app.get("/", function(req, res) {
    res.sendFile(__dirname + '/03__register.html')
});


app.post("/", function(req, res) {
    // console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var mno = req.body.mno;

    /*  Method 1:
    con.connect(function(error) {
        if (error) throw error;
        var sql = "INSERT INTO students(name, email, mno) VALUES('" + name + "','" + email + "','" + mno + "')";
        con.query(sql, function(error, result) {
            res.send("student Registered successfully!!" + result.insertId);
        });
    });
    */

    /*
    // Method 2:
    con.connect(function(error) {
        if (error) throw error;
        var sql = "INSERT INTO students(name, email, mno) VALUES(?, ?, ?)";
        con.query(sql, [name, email, mno], function(error, result) {
            res.send("student Registered successfully!!" + result.insertId);
        });
    });
    */

    //method 3

    con.connect(function(error) {
        if (error) throw error;
        var sql = "INSERT INTO students(name, email, mno) VALUES ?";
        var values = [
            [name, email, mno]
        ];

        con.query(sql, [values], function(error, result) {
            res.send("student Registered successfully!!" + result.insertId);
        });
    });


});

app.listen(7000);