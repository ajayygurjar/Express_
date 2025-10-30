const getProducts = (req, res) => {
  res.send(`Fetch all products.`);
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(`Fetch a product by its ID ${productId}.`);
};

const postProducts = (req, res) => {
  res.send(`Add a new product.`);
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
