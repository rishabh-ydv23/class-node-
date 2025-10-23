const a=require("fs");
a.writeFile("async.txt","this is async file content","utf-8" , function(err){
    if(err) {
        console.log("err");
    }else{
        console.log("file created successfully");
    }
});

console.log("this is after file creation");         //this will be printed first b/c writeFile is asynchronous function
        //it will take less time 