require('dotenv').config();
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const auth = require("./middleware/auth")
const app = express();
const bcrypt = require('bcryptjs')
const port = process.env.PORT || 4000;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require("./db/conn")

const Register = require("./models/registers")

//console.log(process.env.SECRET_KEY);

// for css and js
const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))

// for views folder under templates......  the page will start from this area
const template_path = path.join(__dirname, "../templates/views")
app.set("views", template_path)

// setting view engine as hbs
app.set("view engine", "hbs")

// regsitering partials path
const partials_path = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partials_path)

//using coookie-parser as middleware
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/secret", auth , (req, res) => {
    res.render("secret")
    //console.log(`this is the cookie awesome ${req.cookies.jwt}`);

})
app.get("/logout", auth , async(req, res) => {
    try{

        //recent login will be logout (for sinlge logout)
        /* req.user.tokens = req.user.tokens.filter((currentElement) => {
            return currentElement.token !== req.token;
        })
        */

        // logout from all devices
        req.user.tokens = [];

        req.user.tokens = req.user.tokens.filter((currentElement) => {
            return currentElement.token !== req.token;
        })
        res.clearCookie('jwt')

        console.log("logout successfully!!");

        await req.user.save();
        res.render("login");
    }catch(error){
        res.status(500).send(error);
    }

})

app.get("/register", (req, res) => {
    res.render("register")
})

// create user in db
app.post("/register", async(req, res) => {
    try {
        // console.log(req.body.firstname);
        // res.send(req.body.firstname);

        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) {

            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: confirmpassword
            })

            //to generate token
            const token = await registerEmployee.generateToken();

            //setting token in cookie

            /*
            the res.coookie() function is used to set the cookie name to value.
             the value parameter may be a string or object converted to JSON.
            syntax:

            res.cookie(name,value,[options])  */

            res.cookie("jwt", token , {
                expires:new Date(Date.now() + 30000),
                httpOnly:true,
                
            });
            console.log(cookie);


            //rest implementation is in register.js



            // password hash
            // code is in register.js file 

        
            const registered = await registerEmployee.save();
            res.status(201).render("index");
        } else {
            res.send("password not matching")
        }

    } catch (error) {
        res.status(400).send(error);
        console.log("the error part page");
    }
})


app.get("/login", (req, res) => {
    res.render("login");
})

// login check

app.post("/login", async(req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        // console.log(`email is ${email} and password is ${password}`);

        const userEmail = await Register.findOne({ email: email })

        const isMatch = await bcrypt.compare(password,userEmail.password)

        const token = await userEmail.generateToken();
        console.log("the token part in login : " + token);

        res.cookie("jwt", token , {
            expires:new Date(Date.now() + 600000),
            httpOnly:true
            
        });

        if (isMatch) {
            res.status(201).render("index");
        } else {
            res.send("Invalid Login details");
        }
    } catch (error) {
        res.status(400).send("invalid Login details")
    }
})


// password hashing process example
// in Bycryptjs txt file


// authenctication of user as user no need to login again and again whenever he/she visits the site
// in jwtAuthentication.txt

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})