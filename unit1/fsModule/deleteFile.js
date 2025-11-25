const fs=require('fs');
fs.unlink('writeFile.txt',(err)=>{
    if(err)console.log("Err:",err);
    else console.log("File deleted");
})