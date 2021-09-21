var fs = require("fs");
fs.mkdirSync("day2");
fs.writeFileSync("day2/THA2.txt", "Hello World");
fs.appendFileSync("day2/THA2.txt", " from Kamal");