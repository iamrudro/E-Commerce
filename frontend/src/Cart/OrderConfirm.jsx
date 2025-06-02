import React from 'react';
import '../CartStyles/OrderConfirm.css';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutPath from './CheckoutPath';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OrderConfirm() {
    const { shippingInfo, cartItems } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const tax = subtotal * 0.18
    const shippingCharges = subtotal > 2000 ? 0 : 50
    const total = subtotal + tax + shippingCharges;
    const navigate=useNavigate();

    const proceedToPayment = () => {
        const data = {
            subtotal,
            tax,
            shippingCharges,
            total
        }
        sessionStorage.setItem('orderItem', JSON.stringify(data));
        navigate('/process/payment')
    }

    return (
        <>
            <PageTitle title="Order Confirmation" />
            <Navbar />
            <CheckoutPath activePath={1} />
            <div className="confirm-container">
                <h1 className="confirm-header">Order Confirmation</h1>
                <div className="confirm-table-container">
                    {/* Customer Details */}
                    <table className="confirm-table">
                        <caption>Shipping Details</caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{shippingInfo.phoneNumber}</td>
                                <td>{shippingInfo.address},{shippingInfo.city},{shippingInfo.state},{shippingInfo.country}-{shippingInfo.pincode}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Cart Items */}
                    <table className="confirm-table cart-table">
                        <caption>Cart Items</caption>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (<tr key={item.product}>
                                <td><img src={item.image} alt={item.name} className='product-image' /></td>
                                <td>{item.name}</td>
                                <td>Rs. {item.price}</td>
                                <td>{item.quantity} </td>
                                <td>{item.quantity * item.price}</td>
                            </tr>))}
                        </tbody>
                    </table>

                    {/* Order Summary */}
                    <table className="confirm-table">
                        <caption>Order Summary</caption>
                        <thead>
                            <tr>
                                <th>Subtotal</th>
                                <th>Shipping Charges</th>
                                <th>GST</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rs. {subtotal}</td>
                                <td>Rs. {shippingCharges}</td>
                                <td>Rs. {tax}</td>
                                <td>Rs. {total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="proceed-button" onClick={proceedToPayment}>Proceed to Payment</button>
            </div>
            <Footer />
        </>
    )
}

export default OrderConfirm
