//1
const fs=require('fs');
const user={
    name:"Rishabh",
    age:22
};

fs.writeFile("user.json",JSON.stringify(user),err=>{
    if(err)console.log("err",err);
    else console.log("JSON file is saved");
})