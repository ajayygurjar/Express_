const express = require("express")
let port = 4000;
const app = express();

const usersRouter=require('./routes/users')
const cartRouter=require('./routes/cart');
const productsRouter=require('./routes/productRoutes');

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Ecommerce");
});

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use('/cart',cartRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running`);
});
