const fs = require("fs")
const path = require("path")
module.exports = class sj {
    constructor(){
        
    }
    readFile(file, property){
        if(!file) {
            throw new Error("Which file do you wanna read?")
        }
        if(!property){
            return fs.readFileSync(file, "utf8")
            }else{
                return JSON.parse(fs.readFileSync(file, "utf8"))[property]
            }
        }
}
