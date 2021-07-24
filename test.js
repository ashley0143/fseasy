const fs = require("./src/index.js")
console.log(fs.fileExists("package.json"))//boolean
fs.writeFile("./test/deleted.txt", "deleted xd") //created
fs.deleteFile("./test/deleted.txt")//deleted