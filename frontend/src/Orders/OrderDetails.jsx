import React from 'react';
import '../OrderStyles/OrderDetails.css';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function OrderDetails() {
    return (
        <>
            <PageTitle title="Order ID" />
            <Navbar />
            <div className="order-box">
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
                            <tr className='table-row'>
                                <td className="table-cell"><img src="" alt="Image Item" className='item-image' /></td>
                                <td className="table-cell">Mobile</td>
                                <td className="table-cell">6</td>
                                <td className="table-cell">1500</td>
                            </tr>
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
                                <td className="table-cell">address,city,state,country,pincode</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Phone</th>
                                <td className="table-cell">9635537203</td>
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
                                    <span className="status-tag processing">Processing</span>
                                </td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Payment Status</th>
                                <td className="table-cell">
                                    <span className="pay-tag paid">PAID</span>
                                </td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Paid At</th>
                                <td className="table-cell">05-06-2025</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Items Price</th>
                                <td className="table-cell">500</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Tax Price</th>
                                <td className="table-cell">50</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Shipping Charges</th>
                                <td className="table-cell">66</td>
                            </tr>
                            <tr className="table-row">
                                <th className="table-cell">Total Price</th>
                                <td className="table-cell">600</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderDetails
