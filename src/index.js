const fs = require("fs")
const event = require("events")

class fseasy extends event {
  readFile(file, property) {
    if (!file) {
      throw new Error("Which file do you wanna read?")
    }

    if (!property) {
       fs.readFileSync(file, "utf8")
    } else {
       JSON.parse(fs.readFileSync(file, "utf8"))[property]
       this.emit("readFile" , {file: file, property: property === "" ? null : property})
    }
  }

  writeFile(file, text) {
    if (!file) {
      throw new Error("Which file do you wanna write?")
    }

    if (!text) {
      throw new Error("Blank text cannot be written")
    } else {
      fs.writeFile(file, text, (err) => {
        if (err) throw err
      })
      this.emit("writeFile" , {file: file, content: text})
    }
  }

  appendFile(file, text) {
    if (!file) {
      throw new Error("Which file do you wanna write?")
    }

    if (!text) {
      throw new Error("Blank text cannot be written")
    } else {
      fs.appendFile(file, text, (err) => {
        if (err) throw err
      })
      this.emit("appendFile" , { file: file, content: text})
    }
  }


}

module.exports = new fseasy
