let products = [];
let fs = require('fs');
const { start } = require('repl');

module.exports = class Product{
    
    constructor(title){
        this.title = title;
    }

    save(){
        fs.appendFileSync('./dataFile.txt',this.title+" ");
    }

    static fetchAll(){
        fs.readFile('./dataFile.txt',{encoding: 'utf-8'},(err,data)=>{
            if (err){
                console.log(err);
            }
            console.log(data);
            products.push(data);
            console.log(products);
        })
        
        
        
    }
    

}