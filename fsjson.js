//how to pass the data from nodejs to json file
const user={                //this is object if we give backtick like last then it will be string                 //pass this object to fsjson.js
    "name": "John Doe",
    "age": 30,
    "class": "10th",
    "courses": ["Math", "Science", "History"]
}

const fs=require("fs");
//this is asynchronous way so wee need a callback function

// fs.writeFile("data.json",JSON.stringify(user,null,2),(err)=>{            //null means we are not using replacer function,2 means 2 space indentation
fs.writeFile("data.json",JSON.stringify(user,["name"],2),(err)=>{           //here we are using replacer function to write only name property to json file
    if(err){
        console.log("error",err);
    }else{
        console.log("file created successfully");
    }
});

// now we need to read this file
fs.readFile("data.json","utf-8",(err,data)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log("data from json file:",data);
        const userData=JSON.parse(data);
        console.log("user name from json file:",userData.name);
    }
});