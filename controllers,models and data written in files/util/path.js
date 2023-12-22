let path = require('path');

let x = path.dirname(process.mainModule.filename);
module.exports = x;