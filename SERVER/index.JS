// const http=require('http');

// // const server=http.createServer();

// const server=http.createServer((req,res)=>{
//     console.log("server create");
//     res.end("hello from server");
// })

// server.listen(8000,()=>{
//     console.log("server is listenong on port 8000");
// })




//2

const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const log=`${Date.now()} : New Req received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        if(err) console.log(err);
        else{
            res.end("hello from server");
        }
    })
})