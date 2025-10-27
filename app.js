const express=require('express');
let port=3000;
const app=express();
app.use(express.json())
app.get('/orders',(req,res)=>{
    res.send('Here is the list of all orders')
    
})

app.post('/orders',(req,res)=>{
    res.send('A new order has been created')
    
})

app.get('/users',(req,res)=>{
    res.send('Here is the list of all users')
    
})

app.post('/users',(req,res)=>{
    res.send('A new user has been created')
})


app.listen(port,()=>{
    console.log(`Server is running`)
    
})
