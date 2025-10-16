// console.log(__dirname);
// console.log(__filename);

const path1=require("path");
// console.log(path1);

const filepath=path1.join("folder","student","hello.txt");
// console.log(filepath);

// console.log(module);
// console.log(process);               //how the prject is done like complete information execution steps are here 


const parsedata=path1.parse(filepath);
const resolvedata=path1.resolve(filepath);
const dirdata=path1.dirname (filepath);
const basedata=path1.basename(filepath);
const extdata=path1.extname(filepath);

console.log(parsedata);
console.log(resolvedata);
console.log(dirdata);
console.log(basedata);
console.log(extdata);