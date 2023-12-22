let express = require('express');
let path = require('path');

let rootDir = require('../util/path');

let shopController = require('../controllers/product');

let router = express.Router();

router.get('/',shopController.getShop)

module.exports = router;