const EventEmitter = require('events');
const emitter = new EventEmitter(); // creating instance of EventEmitter class

// emitter.on('greet', () => {
//   console.log('Hello World');
// });

// emitter.emit('greet'); // emitting (triggering) the event

// emitter.on("greet",(user)=>{
//     console.log(`Hello ${user.name} from class ${user.class}`);   
// })

// emitter.emit("greet",{name:"Alice",class:"10th"});


emitter.on("userLoggedIn",(name)=>{
    console.log(`User logged in: ${name}`);
});

emitter.on("userpurchase",(item)=>{
    console.log(`User purchased: ${item}`);
});

emitter.on("userProfileUpdate",(profile)=>{
    console.log(`User profile updated: ${profile.name}, ${profile.age}`);
}   );

// Simulating events
emitter.emit("userLoggedIn","JohnDoe");
emitter.emit("userpurchase","Laptop");
emitter.emit("userProfileUpdate",{name:"John Doe",age:30}); 
// Output:
// User logged in: JohnDoe
// User purchased: Laptop
// User profile updated: John Doe, 30


const fs = require("fs");
