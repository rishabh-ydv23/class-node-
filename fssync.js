/*module 
built in- path os fs 
user defined - 
third party

*/


/*
This code is a Node.js script that demonstrates the use of the built-in os module. The os module in Node.js provides operating system-related
 utility methods and properties
*/
/*
const o=require("os");          //This imports the built-in os module and stores it in the variable o.
console.log(o.platform());
console.log(o.freemem());
console.log(o.totalmem());
console.log(o.tmpdir())
console.log(o.type());
console.log(o.homedir());
console.log(o.arch());
console.log(o.cpus());
console.log(o.uptime());
console.log(o.release());
console.log(o.machine());
console.log(o.networkInterfaces());
*/





//FILE SYSTEM MODULE  - File System module — called fs — allows you to work with files and directories on your computer.
/*  
two methods synchronous and asynchronous
Synchronous methods block the execution of code until the operation is complete, while asynchronous methods allow other code to run while waiting for the 
operation to finish.

Operations are performed one after another, blocking the program until the current task is finished.
Operations are performed without blocking the program. The code continues to run, and when the operation finishes, a callback, promise, or 
event is triggered.
*/

/*
const fs=require("fs");   //importing fs module
The fs module is a built-in (core) module in Node.js.
It provides functions for reading, writing, creating, updating, deleting, and renaming files and folders.
You don’t need to install it — just import it using require("fs").
*/


const fs=require("fs");
// fs.writeFileSync("hello.txt","this is content of file","utf-8");  // third parameter is for encoding format

// fs.appendFileSync("hello.txt","\n this is appended content","utf-8"); // appendFileSync is used to add content to existing file

// const data=fs.readFileSync("hello.txt","utf-8");  // reading file content
//console.log(data.toString())// toString() is used to convert buffer data to string //as i have already used utf-8 encoding so no need to use toString() here;
// console.log(data);

// fs.renameSync("hello.txt","myfile.txt"); // renaming file

// fs.unlinkSync("myfile.txt"); // deleting file

fs.mkdirSync("folder"); // creating folder
fs.writeFileSync("folder/file1.txt","file1 content","utf-8"); // creating file inside folder

// fs.rmdirSync("folder"); // removing folder (folder should be empty to remove it)