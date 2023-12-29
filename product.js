let path = require('path');
let rootDir = require('../util/path')

let Product = require('../models/products');


exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postProduct = (req,res,next)=>{
    let product = new Product(req.body.title);
    product.save();
    res.redirect('/shop');
}

exports.getShop = (req,res,next)=>{
    Product.fetchAll((prod)=>{
        console.log(prod);
    });
    res.sendFile(path.join(rootDir,'views','shop.html'));
}