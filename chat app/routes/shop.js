let express = require('express');
let fs = require('fs');

let router = express.Router();

router.post('/',(req,res,next)=>{
    let username = req.body.title;
    //localStorage.setItem("username",username);
    fs.readFile('./sampleFile.txt',{encoding : 'utf-8'}, (err,data)=>{
        if(err){
            console.log(err);
        }
        res.send(`<html><head></head><body><ul><li>${data}</li></ul><form action="/chat" method = "POST"><input name = ${username} type = "text" id = "message"><button type = "submit">Send</button></form></body></html>`);
    })

    //res.send('<h1>Hello from Express.js!</h1>');
    //res.send(`<html><head></head><body><form action="/chat" method = "POST"><input name = ${username} type = "text" id = "message"><button type = "submit">Send</button></form></body></html>`);
})

router.get('/',(req,res,next)=>{
    fs.readFile('./sampleFile.txt',{encoding : 'utf-8'}, (err,data)=>{
        if(err){
            console.log(err);
        }
        let usernameArr = data.split(':');
        //console.log(usernameArr);
        let newArr = usernameArr[usernameArr.length-2].split(" ");
        //console.log(newArr);
        let username = newArr[newArr.length-2];
        res.send(`<html><head></head><body><ul><li>${data}</li></ul><form action="/chat" method = "POST"><input name = ${username} type = "text" id = "message"><button type = "submit">Send</button></form></body></html>`);
    })
    
})


module.exports = router;