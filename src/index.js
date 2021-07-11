const fs = require("fs")
const path = require("path")
module.exports = class sj {
    constructor(){
        
    }
    readFile(file){
        if(!file) {
            throw new Error("Which file do you wanna read?")
        }
            return fs.readFileSync(file, "utf8")
            }
}
