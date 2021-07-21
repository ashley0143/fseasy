const fs = require("fs")

class fseasy {
  readFile(file, property) {
    if (!file) {
      throw new Error("Which file do you wanna read?")
    }

    if (!property) {
       fs.readFileSync(file, "utf8")
    } else {
       JSON.parse(fs.readFileSync(file, "utf8"))[property]
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
    }
  }

}

module.exports = new fseasy
