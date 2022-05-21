const { readFileSync, writeFile, appendFile, existsSync, unlinkSync } = require("node:fs")
const event = require("node:events")

class fseasy extends event {
  readFile(file, property) {
    if (!file) return "FsEasy Error: File is not provided."

    if (!property) {
      readFileSync(file, "utf8")
      let content =
        typeof JSON.parse(readFileSync(file, "utf8")) === "object"
          ? JSON.parse(readFileSync(file, "utf8"))
          : readFileSync(file, "utf8")
      this.emit("readFile", { file: file, property: null, content: content })
    } else {
      let selectedProperty = JSON.parse(readFileSync(file, "utf8"))[property]
        ? JSON.parse(readFileSync(file, "utf8"))[property]
        : null
      this.emit("readFile", { file: file, property: selectedProperty })
    }
  }

  writeFile(file, text) {
    if (!file) return "FsEasy TypeError: File is not provided."

    if (!text) return "FsEasy Error: Blank text cannot be written."
    writeFile(file, text, (err) => {
      if (err) throw err
      this.emit("writeFile", { file: file, content: text })
    })
  }

  appendFile(file, text) {
    if (!file) return "FsEasy TypeError: File is not provided."

    if (!text) {
      return "FsEasy Error: Blank text cannot be written."
    } else {
      appendFile(file, text, (err) => {
        if (err) return "FsEasy Error: Could not append file."
        this.emit("appendFile", { file: file, content: text })
      })
    }
  }

  fileExists(file) {
    if (!file) return "FsEasy TypeError: File is not provided."
    return existsSync(file) //boolean
  }

  deleteFile(file) {
    if (!file) return "FsEasy TypeError: File is not provided"
    if (existsSync(file) === false) return "FsEasy Error: " + file + " is not defined"
    try {
      unlinkSync(file)
    } catch (error) {
      return "FsEasy Error: The deletion of the file named " + file + " failed"
    }
  }
}

module.exports = new fseasy()
