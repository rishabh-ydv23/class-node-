const fs=require('fs');
fs.readdir('myFolder',(err,files)=>{
    if(err)console.log("Err",err);
    else console.log(files);
})