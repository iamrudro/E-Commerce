import Product from "../models/productModel.js";

// 1.Creating Products
export const createProducts = async (req, res) => {
    const product = await Product.create(req.body)
    // console.log(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


export const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        // message: "All Products"
        success: true,
        products
    })
}

// export const getSingleProduct = (req, res) => {
//     res.status(200).json({
//         message: "Single Product"
//     })
// }