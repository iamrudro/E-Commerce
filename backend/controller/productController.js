import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";
import handleAsyncError from "../middleware/handleAsyncError.js";
import APIFunctionality from "../utils/apiFunctionality.js";


// http://localhost:8000/api/v1/product/67fb9a0ebba9a69207d603da?keyword=shirt


// 1️⃣.Creating Products
export const createProducts = handleAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body)
    // console.log(req.body);
    res.status(201).json({
        success: true,
        product
    })
})


// 2️⃣.Getting All Products
export const getAllProducts = handleAsyncError(async (req, res, next) => {
    const resultPerPage = 3;
    const apiFeatures = new APIFunctionality(Product.find(), req.query).search().filter();

    // Getting filtered query before pagination
    const filteredQuery = apiFeatures.query.clone();
    const productCount = await filteredQuery.countDocuments();


    // Calculate totalpages based on filtered count
    const totalPages = Math.ceil(productCount / resultPerPage)
    const page = Number(req.query.page) || 1;

    if (page > totalPages && productCount > 0) {
        return next(new HandleError("This page doesn't exit", 404))
    }

    // Appy Pagination
    apiFeatures.pagination(resultPerPage);
    const products = await apiFeatures.query

    if (!products || products.length === 0) {
        return next(new HandleError("No Product Found", 404))
    }
    res.status(200).json({
        // message: "All Products"
        success: true,
        products,
        productCount,
        resultPerPage,
        totalPages,
        currentPage: page
    })
})


// 3️⃣.Update Product
export const updateProduct = handleAsyncError(async (req, res, next) => {
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
})

// 4️⃣.Delete Product
export const deleteProduct = handleAsyncError(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    // let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new HandleError("Product is not found", 404))
    }
    res.status(200).json({
        success: true,
        message: "Product is deleted Successfully"
    })
})


// 5️⃣. Accessing Single Product
export const getSingleProduct = handleAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new HandleError("Product is not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})
