const express = require("express")
let port = 4000;
const app = express();

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

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running`);
});
