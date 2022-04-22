const fs = require("fs");
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("1.txt", "utf8");
let dlin = fileContent.length;
let str = fileContent.split("").reverse().join();
let str1 = "";
for (let i = dlin-1; i >= 0; i--){
    str1 = str1 + str[i];
}
fs.writeFileSync("1.txt", str1);
console.log(str1);