const a=require("fs");
// a.promises.writeFile("fsthencatch.txt","this is content of fsthencatch file","utf-8")
// .then(()=>{
//     console.log("file created successfully");     
// })
// .catch((err)=>{
//     console.log("error",err);
// })



// a.promises.appendFile("fsthencatch.txt","\n this is appended content","utf-8")
// .then(()=>{
//     console.log("file appended successfully");  
// })
// .catch((err)=>{
//     console.log("error",err);
// })

a.promises.readFile("fsthencatch.txt","utf-8")
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error",err);
})