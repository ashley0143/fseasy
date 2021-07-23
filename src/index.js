const fs = require("fs")
const event = require("events")

class fseasy extends event {
  readFile(file, property) {
    if (!file) {
      throw new Error("FsEasy Error: File is not provided.")
    }

    if (!property) {
       fs.readFileSync(file, "utf8")
       this.emit("readFile" , {file: file, property: property ? property : null})
    } else {
       JSON.parse(fs.readFileSync(file, "utf8"))[property]
       this.emit("readFile" , {file: file, property: property ? property : null})
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


}

module.exports = new fseasy
