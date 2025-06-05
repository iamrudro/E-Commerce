import express from 'express';
import { allMyOrders, createNewOrder, deleteOrder, getAllOrders, getSingleOrder, updateOrderStatus } from '../controller/orderController.js';
import { roleBasedAccess, verifyUserAuth } from '../middleware/userAuth.js';
const router = express.Router();

router.route('/new/order').post(verifyUserAuth, createNewOrder)
router.route('/order/:id').get(verifyUserAuth, getSingleOrder)
router.route('/admin/order/:id')
    .put(verifyUserAuth, roleBasedAccess('admin'), updateOrderStatus)
    .delete(verifyUserAuth, roleBasedAccess('admin'), deleteOrder)
router.route('/orders/user').get(verifyUserAuth, allMyOrders)
router.route('/admin/orders').get(verifyUserAuth, roleBasedAccess('admin'), getAllOrders)

export default router;