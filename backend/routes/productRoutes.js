import express from 'express';
import { createProducts, getAllProducts, updateProduct } from '../controller/productController.js';
const router = express.Router();

// Routes
router.route("/products").get(getAllProducts).post(createProducts);
router.route("/product/:id").put(updateProduct);

// router.route("/product").get(getSingleProduct)

export default router;
