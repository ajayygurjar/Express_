const express = require("express")
const port = 4000;
const app = express();
const path=require('path')
const errorHandler = require("./middleware/errorHandler");


//Routes
const usersRouter=require('./routes/users')
const cartRouter=require('./routes/cart');
const productsRouter=require('./routes/productRoutes');


app.use(express.static('public'))
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Ecommerce");
});

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use('/api/cart',cartRouter);

app.use((req, res,next) => {
  const error=new Error('Page not found');
  error.statusCode=404;
  next(error)
});

//Centralized error handling 
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running`);
});
