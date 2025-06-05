import React, { useEffect } from 'react';
import '../CartStyles/PaymentSuccess.css';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function PaymentSuccess() {
    const [searchParams] = useSearchParams()
    const reference = searchParams.get('reference');
    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrderData = async () => {
            try {
                const orderItem = JSON.parse(sessionStorage.getItem('orderItem'))
                const orderData = {
                    shippingInfo: {
                        address: shippingInfo.address,
                        city: shippingInfo.city,
                        state: shippingInfo.state,
                        country: shippingInfo.country,
                        pincode: shippingInfo.pincode,
                        phoneNo: shippingInfo.phoneNumber
                    },
                    orderItems: cartItems.map((item) => ({
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        image: item.image,
                        product: item.product
                    })),
                    paymentInfo: {
                        id: reference,
                        status: 'succeeded'
                    },
                    itemPrice: orderItem.subtotal,
                    taxPrice: orderItem.tax,
                    shippingPrice: orderItem.shippingCharges,
                    totalPrice: orderItem.total
                }
                console.log('Sending Data', orderData);
            } catch (error) {
                console.log('Order creation error', error.message);
                toast.error(error.message || 'Order Creation Error', { position: 'top-center', autoClose: 3000 })
            }
        }
        createOrderData()
    }, [reference])

    return (
        <>
            <PageTitle title="Payment Status" />
            <Navbar />
            <div className="payment-success-container">
                <div className="success-content">
                    <div className="success-icon">
                        <div className="checkmark"></div>
                    </div>
                    <h1>Order Confirmed!</h1>
                    <p>Your Payment was successfull. Reference ID <strong>{reference}</strong></p>
                    <Link className='explore-btn' to="/orders/user">View Orders</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccess
