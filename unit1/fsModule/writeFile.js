const fs=require('fs');
fs.writeFile("writeFile.txt","hello world whats up",(err)=>{
    if(err)console.log("error");
    console.log("file written succesfull");
});