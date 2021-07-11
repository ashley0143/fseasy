const savajcript = require("./src/index.js");
const sj = new savajcript()
let a = sj.writeFile("./test/testfile.json", `{\n"Testa": "Testb"\n}`)
console.log(sj.readFile("./test/testfile.json", "Testa"))
let b = sj.appendFile("./test/testfile.json", `,{\n"Testv": "Testf"\n}`)
console.log(sj.readFile("./test/testfile.json"))