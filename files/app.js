const fs = require("fs");

const content = fs.readFileSync("./files/text.txt");

console.log(content.toString("utf-8"));
