const express=require('express');
let port=4000;
const app=express();
app.use(express.json())
app.get('/products',(req,res)=>{
    res.send('Here is the list of all products')
    
})

app.post('/products',(req,res)=>{
    res.send('A new product has been added')
    
})

app.get('/categories',(req,res)=>{
    res.send('Here is the list of all categories')
    
})

app.post('/categories',(req,res)=>{
    res.send('A new category has been created')
})

// Wildcard route - Handle all undefined routes (404 error)
app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found </h1>`)
})


app.listen(port,()=>{
    console.log(`Server is running`)
    
})
