const fs=require("fs/promises");


//await will always work inside async 
// const writeData=async()=>{
//     try{
//         await fs.writeFile("asyncawait.txt","this is async await file content","utf-8");
//         console.log("file created successfully");
//     }catch(err){
//         console.log("error",err);
//     }
// }

// writeData();

const readData=async()=>{
    try{
        await fs.readFileFile("asyncawait.txt","utf-8");
        