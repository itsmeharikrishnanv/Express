let http = require("http");

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<html><head></head><body><form action="/product" method = "POST"><lebal for = "name">Name</lebal><input name = "title" type = "text" id = "name"><lebal for = "size">Size</lebal><input name = "size" type = "text" id = "size"><button type = "submit">Send</button></form></body></html>');
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express.js!</h1>');
})

app.listen('4000');

