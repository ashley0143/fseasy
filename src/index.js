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
    writeFile(file, text){
        if(!file){
            throw new Error("Which file do you wanna write?")
        }
        if(!text){
            throw new Error("Blank text cannot be written")
        }else{
        try{
        fs.writeFileSync(file, text, "utf8")
    }catch(error){
        throw Error(error)
    }
    }
    }
}
