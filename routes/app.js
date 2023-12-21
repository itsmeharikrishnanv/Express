let http = require("http");

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let adminRoutes = require('./routes/admin');
let shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).send("<h1>Page Not Found!</h1>");
})

app.listen('4000');

