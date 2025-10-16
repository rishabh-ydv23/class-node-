// function printTable(num1){
//     for(let i=1;i<10;i++){
//         console.log(`${num1} * ${i}=${num1*i}`);
//     }
// }
// printTable(10);


// const funct=(num1)=>{
//     for(let i=1;i<10;i++){
//         return (`${num1} * ${i}=${num1*i}`);
//     }
// }
// console.log(funct(5));

const student={
    1:"Rishabh",                    //important 
    "degree one":"Btech Cse",
    semester:4,
    greet:function(){
        console.log("hello this is "+this.name);
    }
}
console.log(student[1]);

// console.log(student.name);

// console.log(student.greet());

// student.greet();

// console.log(student.1);  // this is giving error b/c
// Rules for valid identifiers:
// Cannot start with a number.
// Cannot have spaces or special characters (except _ and $).

console.log(student["degree one"]);