let express = require('express');

let router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<html><head></head><body><form action="/admin/product" method = "POST"><lebal for = "name">Name</lebal><input name = "title" type = "text" id = "name"><lebal for = "size">Size</lebal><input name = "size" type = "text" id = "size"><button type = "submit">Send</button></form></body></html>');
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;