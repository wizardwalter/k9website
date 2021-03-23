const config = require ("./config/config");
require('./Models/db');
const express = require("express");
const cors = require ("cors");
const passport = require("passport");
const blogRoute = require("./Routes/blog");
const bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.use("/blog", blogRoute);














app.listen(process.env.port, () =>{
    console.log(`Server is listening on port: ${process.env.port}`)
})

