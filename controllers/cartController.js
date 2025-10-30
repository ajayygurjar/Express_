const getCartUser = (req, res) => {
  const userId = req.params.userId;
  res.send(`Adding product to cart for user with ID: ${userId}`);
};

const adddProductToCart = (req, res) => {
  const userId = req.params.userId;
  res.send(`Adding product to cart for user with ID: ${userId}`);
};


module.exports={
    getCartUser,
    adddProductToCart
}
