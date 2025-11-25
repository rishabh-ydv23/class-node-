const fs=require('fs');

// //asynchronous 

// console.log("Start");
// fs.readFile('writeFile.txt','utf8',(err,data)=>{
//     if(err)console.log("Err:",err);
//     else console.log(data);
// })
// console.log("end");


//synchronous - block the thread

console.log("Start");
const data=fs.readFileSync('writeFile.txt','utf-8');
console.log(data);
console.log("end");