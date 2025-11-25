const fs=require('fs');
if(fs.existsSync("user.json")){
    console.log("file found");
}else{
    console.log("file not found");
}