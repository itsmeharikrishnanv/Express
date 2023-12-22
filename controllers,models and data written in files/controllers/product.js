let path = require('path');
let rootDir = require('../util/path')

let Product = require('../models/productmodel');


exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postProduct = (req,res,next)=>{
    let product = new Product(req.body.title);
    product.save();
    res.redirect('/shop');
}

exports.getShop = (req,res,next)=>{
    let arr = Product.fetchAll();
    //console.log(arr);
    res.sendFile(path.join(rootDir,'views','shop.html'));
}