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

const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    try {
        const log = `${Date.now()} : ${req.method} ${req.url} New Req received\n`;
        
        // Write log asynchronously but don't wait for it to respond
        fs.appendFile('log.txt', log, (err) => {
            if (err) console.error('Log error:', err);
        });
        
        // Handle request immediately
        switch(req.url){
            case "/":
                res.end("Home page");
                break;
            case "/about":
                res.end("I am rishabh");
                break;
            default:
                res.end("404 not found");
        }
        
    } catch (error) {
        console.error('Server error:', error);
        res.end("Internal Server Error");
    }
});

server.listen(8000, () => console.log("server started"));