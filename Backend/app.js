const config = require ("./config/config");
require('./Models/db');
const express = require("express");
const cors = require ("cors");
const passport = require("passport");
const blogRoute = require("./Routes/blog");
const dogsRoute = require("./Routes/dogs");
const aboutRoute = require("./Routes/about");
const adminRoute = require("./Routes/admin");
const bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

app.use("/blogs", blogRoute);
app.use("/dogs", dogsRoute);
app.use("/about", aboutRoute);
app.use("/admin", adminRoute);




app.listen(process.env.port, () =>{
    console.log(`Server is listening on port: ${process.env.port}`)
})

