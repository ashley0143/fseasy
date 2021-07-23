const fs = require("fs")
const event = require("events")

class fseasy extends event {
  readFile(file, property) {
    if (!file) {
      throw new Error("FsEasy Error: File is not provided.")
    }

    if (!property) {
       fs.readFileSync(file, "utf8")
       let content = typeof JSON.parse(fs.readFileSync(file, "utf8")) === 'object' ? JSON.parse(fs.readFileSync(file, "utf8")) : fs.readFileSync(file, "utf8")
       this.emit("readFile" , {file: file, property : null, content: content})
    } else {
       let selectedProperty = JSON.parse(fs.readFileSync(file, "utf8"))[property] ? JSON.parse(fs.readFileSync(file, "utf8"))[property] : null
       this.emit("readFile" , {file: file, property: selectedProperty})
    }
  }

  writeFile(file, text) {
    if (!file) {
      throw new Error("FsEasy Error: File is not provided.")
    }

    if (!text) {
      throw new Error("FsEasy Error: Blank text cannot be written.")
    } else {
      fs.writeFile(file, text, (err) => {
        if (err) throw err;
        this.emit("writeFile" , {file: file, content: text})
      })
    }
  }

  appendFile(file, text) {
    if (!file) {
      throw new Error("FsEasy Error: File is not defined.")
    }

    if (!text) {
      throw new Error("FsEasy Error: Blank text cannot be written.")
    } else {
      fs.appendFile(file, text, (err) => {
        if (err) throw err;
        this.emit("appendFile" , { file: file, content: text})
      })
    }
  }

 fileExists(file){
   if(!file){
     throw new Error("FsEasy Error: File is not defined")
   }
  return fs.fileExists(file) //boolean
 }

}

module.exports = new fseasy
