// console.log(__dirname);
// console.log(__filename);

const path1=require("path");
const filepath=path1.join("folder","student","hello.txt");
// console.log(filepath);
// console.log(path1);             

/*
    MODULE : In Node.js, a module is simply a reusable block of code — a file or set of files — that you can import and use in another file.

    PATH:  is a built-in core module that provides utilities for working with file and directory paths.
    The variable path now gives you access to various functions to handle and manipulate file paths in a platform-independent way (works both on Windows and Linux).

*/

// console.log(module);
    /*
    In Node.js, module is a special object available in every file. It represents the current module (file).
    saari properties show hote hai uss file ke 
    It shows all the “properties” of that file, like:
        Its path (filename, path)
        What it exports (exports)
        Which module required it (parent)
        Which modules it requires (children)
        Whether it’s fully loaded (loaded)
    */

console.log(process);               //how the prject is done like complete information execution steps are here 


const parsedata=path1.parse(filepath);
const resolvedata=path1.resolve(filepath);
const dirdata=path1.dirname (filepath);
const basedata=path1.basename(filepath);
const extdata=path1.extname(filepath);

// console.log(parsedata);
// console.log(resolvedata);
// console.log(dirdata);
// console.log(basedata);
// console.log(extdata);