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


export const getAllProducts = (req, res) => {
    res.status(200).json({
        message: "All Products"
    })
}

// export const getSingleProduct = (req, res) => {
//     res.status(200).json({
//         message: "Single Product"
//     })
// }