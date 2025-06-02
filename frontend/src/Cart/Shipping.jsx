import React, { useState } from 'react';
import '../CartStyles/Shipping.css';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutPath from './CheckoutPath';
import { useDispatch, useSelector } from 'react-redux';

function Shipping() {
    const { shippingInfo } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    const shippingInfoSubmit = (e) => {
        e.preventDefault();
        console.log('hello');
    }

    return (
        <>
            <PageTitle title="Shipping Info" />
            <Navbar />
            <CheckoutPath activePath={0} />
            <div className="shipping-form-container">
                <h1 className="shipping-form-header">Shipping Details</h1>
                <form className="shipping-form" onSubmit={shippingInfoSubmit}>
                    {/* address,pincode,phn number section */}
                    <div className="shipping-section">
                        <div className="shipping-form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" placeholder='Enter your address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="pincode">Pincode</label>
                            <input type="number" name="pincode" id="pincode" placeholder='Enter your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} />
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder='Enter your Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>

                    {/* country,state,city section */}
                    <div className="shipping-section">
                        <div className="shipping-form-group">
                            <label htmlFor="country">Country</label>
                            <select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
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
                            <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)}>
                                <option value="">Select a State</option>
                            </select>
                        </div>
                        <div className="shipping-form-group">
                            <label htmlFor="city">City</label>
                            <select name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)}>
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
