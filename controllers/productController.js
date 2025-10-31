const productService = require("../services/productService");
const path = require("path");
const { sendErrorResponse } = require("../utils/response");

const getProducts = (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"));
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

const getProductById = (req, res,next) => {
  try {
    const productId = req.params.id;

    if (productId>10) {
      const error = new Error(`Product ID is required`);
      error.statusCode = 400;
      throw error;
    }

    const result = productService.getProductById(productId);
    res.send(result);
  } catch (error) {
    next(error)
  }
};

const postProducts = (req, res, next) => {
  try {
    const data = req.body;
    if (!data.productName) {
      const error = new Error("Product name is required");
      error.statusCode = 400;
      throw error;
    }
    res.json({ message: `Added product: ${data.productName}` });
  } catch (error) {
    next(error);
  }
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
