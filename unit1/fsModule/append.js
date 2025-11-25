const fs=require('fs');
fs.appendFile("writeFile.txt","appended data here",(err)=>{
    if(err)console.log("Err:",errror);
    else console.log("Data appended");
})