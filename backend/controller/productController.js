import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";

// 1.Creating Products
export const createProducts = async (req, res) => {
    const product = await Product.create(req.body)
    // console.log(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


// 2.Getting All Products
export const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        // message: "All Products"
        success: true,
        products
    })
}


// 3.Update Product
export const updateProduct = async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    // console.log(req.params.id);
    // let product = await Product.findById(req.params.id);
    // console.log(product);
    if (!product) {
        return next(new HandleError("Product is not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
}

// 4.Delete Product
export const deleteProduct = async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    // let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new HandleError("Product is not found", 404))
    }
    res.status(200).json({
        success: true,
        message: "Product is deleted Successfully"
    })
}


// 5. Accessing Single Product
export const getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new HandleError("Product is not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
}
