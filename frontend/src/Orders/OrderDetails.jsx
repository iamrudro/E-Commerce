import React, { useEffect } from 'react';
import '../OrderStyles/OrderDetails.css';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, removeErrors } from '../features/order/orderSlice';
import { toast } from 'react-toastify';

function OrderDetails() {
    const { orderId } = useParams();
    const { order, loading, error } = useSelector(state => state.order);
    console.log(order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
        if (error) {
            toast.error(error, { position: 'top-center', autoClose: 3000 });
            dispatch(removeErrors())
        }
    }, [dispatch, error, orderId])

    const {
        shippingInfo = {},
        orderItems = [],
        paymentInfo = {},
        orderStatus,
        totalPrice,
        taxPrice,
        shippingPrice,
        itemPrice,
        paidAt
    } = order;

    const paymentStatus = paymentInfo?.status === 'succeeded' ? 'Paid' : 'Not Paid';
    const finalOrderStatus = paymentStatus === 'Not Paid' ? 'Cancelled' : orderStatus;
    const orderStatusClass = finalOrderStatus === 'Delivered' ? 'status-tag delivered' : `status-tag ${finalOrderStatus.toLowerCase()}`;
    const paymentStatusClass = `pay-tag ${paymentStatus === 'Paid' ? 'paid' : 'not-paid'}`;

    return (
        <>
            <PageTitle title={orderId} />
            <Navbar />
            {loading ? (<Loader />) : (<div className="order-box">
                {/* Order Items Table */}
                <div className="table-block">
                    <h2 className="table-title">Order Items</h2>
                    <table className="table-main">
                        <thead>
                            <tr>
                                <th className="head-cell">Image</th>
                                <th className="head-cell">Name</th>
                                <th className="head-cell">Quantity</th>
                                <th className="head-cell">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item) => (<tr className='table-row'>
                                <td className="table-cell"><img src={item.image} alt={item.name} className='item-image' /></td>
                                <td className="table-cell">{item.name}</td>
                                <td className="table-cell">{item.quantity}</td>
                                <td className="table-cell">Rs. {item.price}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>

                {/* Shipping Info table */}
                <div className="table-block">
                    <h2 className="table-title">Shipping Info</h2>
                    <table className="table-main">
                        <tbody>
                            <tr className="table-row">
                                <th className="table-cell">Address</th>
                                <td className="table-cell">{shippingInfo.address},{shippingInfo.city},{shippingInfo.state},{shippingInfo.country},{shippingInfo.pincode}</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Phone</th>
                                <td className="table-cell">{shippingInfo.phoneNo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Order Summary */}
                <div className="table-block">
                    <h2 className="table-title">Order Summary</h2>
                    <table className="table-main">
                        <tbody>
                            <tr className="table-row">
                                <th className="table-cell">Order Status</th>
                                <td className="table-cell">
                                    <span className={orderStatusClass}>{finalOrderStatus}</span>
                                </td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Payment Status</th>
                                <td className="table-cell">
                                    <span className={paymentStatusClass}>{paymentStatus}</span>
                                </td>
                            </tr>
                            {paidAt && (<tr className="table-row">
                                <th className="table-cell">Paid At</th>
                                <td className="table-cell">{new Date(paidAt).toLocaleString()}</td>
                            </tr>)}
                            <tr className="table-row">
                                <th className="table-cell">Items Price</th>
                                <td className="table-cell">Rs.{itemPrice}</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Tax Price</th>
                                <td className="table-cell">Rs.{taxPrice}</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Shipping Charges</th>
                                <td className="table-cell">Rs.{shippingPrice}</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Total Price</th>
                                <td className="table-cell">Rs.{totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
            <Footer />
        </>
    )
}

export default OrderDetails
