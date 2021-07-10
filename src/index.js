const fs = require("fs")
const path = require("path")
module.exports = class sj {
    readFile(file, property){
        if(!file) {
            throw new Error("Which file do you wanna read?")
        }
        if(!property) {
            return fs.readFileSync(file, "utf8")
        }else{
            require(path.join(process.cwd(), file)) + `.${property}`
        }
    }
}