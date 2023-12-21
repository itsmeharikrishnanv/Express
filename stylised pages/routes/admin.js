let express = require('express');
let path = require('path');
let rootDir = require('../util/path')

let router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;