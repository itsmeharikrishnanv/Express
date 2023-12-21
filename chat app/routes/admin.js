let express = require('express');
let fs = require('fs');

let router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<html><head></head><body><form onSubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method = "POST"><lebal for = "username">Name</lebal><input name = "title" type = "text" id = "username"><button type = "submit">Login</button></form></body></html>');
})

router.post('/chat',(req,res,next)=>{
    //console.log(username);

    //console.log(req.body);
    let username = Object.keys(req.body);
    let message = Object.values(req.body);
    //console.log(username,message);
    let element = ` ${username[0]} : ${message[0]} `;
   // console.log(element,typeof(element));
    fs.appendFileSync('./sampleFile.txt',element);
    res.redirect('/');
})

module.exports = router;