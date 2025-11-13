//now requiring 
const math=require('./math.js');                // this one is best way using commonjs syntax

const sum=math.add(5,3);
const difference=math.subtract(5,3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);




// const {add,subtract}=require('./math.js');




// // 2nd way using ES6 module syntax
// import {add,subtract} from './math.js';

// const sum2=add(10,4);
// const difference2=subtract(10,4);
// console.log(`Sum2: ${sum2}`);
// console.log(`Difference2: ${difference2}`);


