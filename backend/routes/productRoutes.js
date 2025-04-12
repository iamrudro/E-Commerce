import express from 'express';
import { getAllProducts } from '../controller/productController.js';
const router = express.Router();

// Routes
router.route("/products").get(getAllProducts)
// router.route("/product").get(getSingleProduct)

export default router;
