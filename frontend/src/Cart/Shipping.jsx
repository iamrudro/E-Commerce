import React from 'react';
import '../CartStyles/Shipping.css';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Shipping() {
    return (
        <>
            <PageTitle title="Shipping Info" />
            <Navbar />
            <div className="shipping-form-container">
                <h1 className="shipping-form-header">Shipping Details</h1>
                <form className="shipping-form">
                    {/* address,pincode,phn number section */}
                    <div className="shipping-section">
                        <div className="shipping-form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" placeholder='Enter your address' />
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="pincode">Pincode</label>
                            <input type="number" name="pincode" id="pincode" placeholder='Enter your Pincode' />
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="phoneNumer">Phone Number</label>
                            <input type="tel" name="phoneNumer" id="phoneNumer" placeholder='Enter your Phone Number' />
                        </div>
                    </div>

                    {/* country,state,city section */}
                    <div className="shipping-section">
                        <div className="shipping-form-group">
                            <label htmlFor="country">Country</label>
                            <select name="country" id="country">
                                <option value="">Select a Country</option>
                                <option value="US">United States</option>
                                <option value="IND">India</option>
                                <option value="UK">United Kingdom</option>
                                <option value="AUS">Australia</option>
                                <option value="CAN">Canada</option>
                            </select>
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="state">State</label>
                            <select name="state" id="state">
                                <option value="">Select a State</option>
                            </select>
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="city">City</label>
                            <select name="city" id="city">
                                <option value="">Select a City</option>
                            </select>
                        </div>
                    </div>
                    <button className="shipping-submit-btn">Continue</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Shipping
