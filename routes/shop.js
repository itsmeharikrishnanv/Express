let express = require('express');

let router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>Hello from Express.js!</h1>');
})

module.exports = router;