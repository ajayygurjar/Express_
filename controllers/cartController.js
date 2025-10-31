const getCartUser = (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      const error = new Error("User Id is required");
      error.statusCode = 400;
      throw error;
    }
    res.send(`Adding product to cart for user with ID: ${userId}`);
  } catch (error) {
    next(error);
  }
};

const adddProductToCart = (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      const error = new Error("User Id is required");
      error.statusCode = 400;
      throw error;
    }
    res.send(`Adding product to cart for user with ID: ${userId}`);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCartUser,
  adddProductToCart,
};
