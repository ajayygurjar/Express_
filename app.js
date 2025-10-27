const express=require('express');
let port=3000;
const app=express();
app.use((req,res,next)=>{
    console.log(`Authentication middleware called`);
    next();
})
app.use('/welcome',(req,res,next)=>{
    req.user='Guest'
    next();
})


app.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}|! </h1>`)
})


app.listen(port,()=>{
    console.log(`Server is running`)
})
