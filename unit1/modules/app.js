//check math.js
//these are called user defined modules

//1
const math=require("./math");
const sum=require("../add");

console.log(sum(2,3));
console.log(math.add(10,20));
console.log(math.multiply(4,5));
console.log(math.subtract(4,2));


//2

// const { add,multiply  } = require("./math");
// console.log(add(10,5));
