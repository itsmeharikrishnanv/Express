let express = require('express');

let productsController = require('../controllers/product');

let router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postProduct);

module.exports = router;