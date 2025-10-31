const productService = require("../services/productService");

const getProducts = (req, res) => {
  const result = productService.getAllProducts();
  res.send(result);
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  const result = productService.getProductById(productId);
  res.send(result);
};

const postProducts = (req, res) => {
  const result = productService.addProduct();
  res.send(result);
};

const editProducts = (req, res) => {
  res.send(`Put request called`);
};

const deleteProducts = (req, res) => {
  res.send(`Delete request called`);
};
module.exports = {
  getProducts,
  getProductById,
  postProducts,
  deleteProducts,
  editProducts,
};
