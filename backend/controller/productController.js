import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";
import handleAsyncError from "../middleware/handleAsyncError.js";
import APIFunctionality from "../utils/apiFunctionality.js";


// http://localhost:8000/api/v1/product/67fb9a0ebba9a69207d603da?keyword=shirt


// 1️⃣.Creating Products
export const createProducts = handleAsyncError(async (req, res, next) => {
    req.body.user = req.user.id;
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


// 7️⃣. Creating and updating Review
export const createReviewForProduct = handleAsyncError(async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.user.id);
    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }
    const product = await Product.findById(productId);
    if (!product) {
        return next(new HandleError("Product not found", 400))
    }
    const reviewExists = product.reviews.find(review => review.user.toString() === req.user.id.toString())
    if (reviewExists) {
        product.reviews.forEach(review => {
            if (review.user.toString() === req.user.id.toString()) {
                review.rating = rating,
                    review.comment = comment
            }
        })
    } else {
        product.reviews.push(review)
    }
    product.numberOfReviews = product.reviews.length
    let sum = 0;
    product.reviews.forEach(review => {
        sum = sum + review.rating;
    })
    product.ratings = product.reviews.length > 0 ? sum / product.reviews.length : 0;
    await product.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
        product
    })
})


// 8️⃣. Getting reviews
export const getProductReviews = handleAsyncError(async (req, res, next) => {
    // console.log(req.query.id);
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new HandleError("Product not found", 400))
    }
    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})


// 9️⃣. Deleting Reviews
export const deleteReview = handleAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new HandleError("Product not found", 400))
    }
    const reviews = product.reviews.filter(review => review._id.toString() !== req.query.id.toString())
    let sum = 0;
    reviews.forEach(review => {
        sum += review.rating
    })
    const ratings = reviews.length > 0 ? sum / reviews.length : 0;
    const numOfReviews = reviews.length;
    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        message: "Review Deleted Successfully"
    })
})


// 6️⃣. Admin - Getting All Products
export const getAdminProducts = handleAsyncError(async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
})
