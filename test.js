const fs = require("./src/index.js")
console.log(fs.deleteFile("./test/deleted.txt"))//error
console.log(fs.writeFile("./test/testfile.json"))//error
console.log(fs.fileExists()) //error
//Hatalarda return olması çok daha iyi, konsolda kaynak kodunu görmek hoşuma gitmiyor sonuçta dönen şey bir hata ve kullanıcı bunun farkında.