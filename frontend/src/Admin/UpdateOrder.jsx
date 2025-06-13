import React, { useEffect, useState } from 'react';
import '../AdminStyles/UpdateOrder.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../features/order/orderSlice';

function UpdateOrder() {
    const [status, setStatus] = useState("");
    const { orderId } = useParams();
    const { order, loading } = useSelector(state => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, orderId]);


    const {
        shippingInfo = {},
        orderItems = [],
        paymentInfo = {},
        orderStatus,
        totalPrice
    } = order

    const paymentStatus = paymentInfo.status === 'succeeded' ? 'Paid' : 'Not Paid';
    const finalOrderStatus = paymentStatus === 'Not Paid' ? 'Cancelled' : orderStatus;

    return (
        <>
            <PageTitle title="Update Order" />
            <Navbar />
            <div className="order-container">
                <h1 className="order-title">Update Order</h1>
                <div className="order-details">
                    <h2>Order Information</h2>
                    <p><strong>Order ID : </strong>{orderId}</p>
                    <p><strong>Shipping Address : </strong>{shippingInfo.address},{shippingInfo.city},{shippingInfo.state},{shippingInfo.country}-{shippingInfo.pincode}</p>
                    <p><strong>Phone : </strong>{shippingInfo.phoneNo}</p>
                    <p><strong>Order Status : </strong>{finalOrderStatus}</p>
                    <p><strong>Payment Status : </strong>{paymentStatus}</p>
                    <p><strong>Total Price : </strong>Rs. {totalPrice}</p>
                </div>

                <div className="order-items">
                    <h2>Order Items</h2>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <img src={item.image} alt={item.name} className='order-item-image' />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>Rs. {item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="order-status">
                    <h2>Update Status</h2>
                    <select className="status-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select Status</option>
                        <option value="Shipped">Shipped</option>
                        <option value="On The Way">On The Way</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                    <button className="update-button">Update Status</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateOrder
