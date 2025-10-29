const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send(`Fetch all products.`);
});

router.get("/:id", (req, res) => {
    const productId = req.params.id;
  res.send(`Fetch a product by its ID ${productId}.`)
});

router.post("/", (req, res) => {
  res.send(`Add a new product.`)
});

module.exports = router;
