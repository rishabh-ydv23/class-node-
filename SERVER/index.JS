const http=require('http');

// const server=http.createServer();

const server=http.createServer((req,res)=>{
    console.log("server create");
    res.end("hello from server");
})

server.listen(8000,()=>{
    console.log("server is listenong on port 8000");
})