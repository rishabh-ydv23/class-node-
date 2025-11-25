const fs=require('fs');

fs.readFile("user.json",'utf-8',(err,data)=>{
    if(err) console.log("ERR:",err);
    const obj=JSON.parse(data);
    console.log(obj);
})