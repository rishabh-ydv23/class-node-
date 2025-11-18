// fs stands for File System, and it allows Node.js to interact with files and directories on your system
const fs=require('fs');

// //sync methods
    // fs.writeFileSync('example.txt','Hello, World!');        // Create a new file named example.txt and write "Hello, World!" to it.


//async methods
    // fs.writeFile('asyncExample.txt','hi there!',(err) => {  })   // Create a new file named asyncExample.txt and write "hi there!" to it asynchronously.


    // const data=fs.readFileSync('contact.txt','utf8');  // Read the contents of example.txt file synchronously with UTF-8 encoding.
    // console.log(data);

    fs.readFileSync('contact.txt','utf8');  // Read the contents of contact.txt file synchronously with UTF-8 encoding.