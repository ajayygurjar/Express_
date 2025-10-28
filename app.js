const express = require("express");
let port = 4000;
const app = express();
const categoriesRouter=require('./routes/categories')
const productsRouter=require('./routes/products')

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); 
});

app.use('/products',productsRouter)
app.use('/categories',categoriesRouter)

app.listen(port, () => {
  console.log(`Server is running`);
});
