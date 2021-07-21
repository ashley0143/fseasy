const fseasy = require("./src/index.js");
const fs = new fseasy()
let a = fs.writeFile("./test/testfile.json", `{\n"Testa": "Testb"\n}`)
console.log(fs.readFile("./test/testfile.json", "Testa"))
let b = fs.appendFile("./test/testfile.json", `,{\n"Testv": "Testf"\n}`)
console.log(fs.readFile("./test/testfile.json"))