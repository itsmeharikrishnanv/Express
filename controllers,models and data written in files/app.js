let http = require("http");

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let path = require('path');

let rootDir = require('./util/path')

let adminRoutes = require('./routes/admin');
let shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404error.html'));
})

app.listen('4000');

