const config = require ("./config/config");
const express = require("express");
const cors = require ("cors");
const passport = require("passport");
require('./Models/db')

var app = express();

var posts = require("./Controllers/homepage");


app.use(cors());
app.use(passport.initialize())














app.listen(process.env.port, () =>{
    console.log(`Server is listening on port: ${process.env.port}`)
})

