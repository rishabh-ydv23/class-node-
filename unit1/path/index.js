const path = require("path");

console.log(path.basename(__filename));         //basename = file name with extension.
console.log(path.dirname(__filename));          //dirname = folder (directory) where the current file is located.
console.log(path.extname(__filename));          //extname = extension of your file (including the dot).
