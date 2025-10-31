const express = require("express");
const router = express.Router();

const postProductToCart = require("../controllers/cartController");
const getCartUserById = require("../controllers/cartController");
router.get("/:userId", getCartUserById.getCartUser);

router.post("/:userId", postProductToCart.adddProductToCart);

module.exports = router;
