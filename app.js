const express=require('express');

const app=express();
app.use((req,res,next)=>{
    console.log(`Server is up and running on port 3000! Ready to handle requests.`)
    // next();
    //you can use next() if you want to run another request

})

// app.use((req,res,next)=>{
//     console.log(`out from middleware 2`)
//     res.send(`<h1>hello world </h2>`)
// })

// const server=http.createServer(app)
// server.listen(3000)

// instead we can write 
app.listen(3000)
