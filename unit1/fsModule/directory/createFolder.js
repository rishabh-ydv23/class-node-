const fs=require('fs');
fs.mkdir('myFolder',(err)=>{
    if(err)console.log("ERR:",err);
    else console.log("Drectory ctreated");
})