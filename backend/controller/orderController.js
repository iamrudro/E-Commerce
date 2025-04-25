import Order from '../models/orderModel.js';
import Porduct from '../models/productModel.js';
import User from '../models/userModel.js';
import handleAsyncError from '../middleware/handleAsyncError.js';
import HandleError from '../utils/handleError.js';

// 1️⃣. Create new Order
export const createNewOrder = handleAsyncError(async (req, res, next) => {
    const { shippingInfo, orderItems, paymentInfo, itemPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })
    res.status(201).json({
        success: true,
        order
    })
})