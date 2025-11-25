const fs=require("fs");
fs.readFile('user.json','utf8',(err,data)=>{
    // if (err) {
    //     console.log(err);
    //     return;   // stop execution here
    // }
    let obj=JSON.parse(data);
    obj.name="yadav";

    fs.writeFile('user.json',JSON.stringify(obj),err=>{
        // if (err) {
        //     console.log(err);
        //     return;   // stop execution here
        // }        
        console.log("Updated");
    })
})