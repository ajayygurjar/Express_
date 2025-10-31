const express = require("express");
const router = express.Router();
const productController=require('../controllers/productController')
const productByIdController=require('../controllers/productController')
const postProduct=require('../controllers/productController')
const editProducts=require('../controllers/productController')
const deleteProducts=require('../controllers/productController')
router.get("/",productController.getProducts);

router.get("/:id",productByIdController.getProductById);

router.post("/",postProduct.postProducts);

router.put("/:id",editProducts.editProducts)

router.delete("/:id",deleteProducts.deleteProducts)

module.exports = router;
