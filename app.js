let http = require("http");

let express = require('express');

let app = express();

app.use((req, res, next)=>{
    console.log("Inside First middleware",req.originalUrl);
    next();
})

app.use((req,res,next)=>{
    console.log("Inside Second middleware");
    res.send('<h1>Hello from Express.js!</h1>');
    //res.end();
})

app.listen('4000');

