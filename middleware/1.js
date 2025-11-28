import express from 'express';
const ex=express();
ex.use(express.json());
ex.get("/",(req,res)=>{
    const user={
        "name":"Dipanshu",
        "age":19,
        "section":"K23EC"
    }
    res.json(user);
    //res.send(`User name is ${user.name}, having age ${user.age} and section ${user.section}`);
})
function errorhandling(error,req,res,next){
    res.status(500).send("try after some time");
}
ex.get("/error",(req,res,next)=>{
    //res.send("hello");
    const err=new error();
    next(err);
})
ex.use(errorhandling);
ex.listen(3000);