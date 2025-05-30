import React, { useState } from 'react';
import '../UserStyles/Form.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

function UpdatePassword() {
    const [oldPassword, SetOldPassword] = useState("");
    const [newPassword, SetNewPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const updatePasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("oldPassword", oldPassword)
        myForm.set("newPassword", newPassword)
        myForm.set("confirmPassword", confirmPassword)
    }
    return (
        <>
            <Navbar />
            <PageTitle title="Password Update" />
            <div className="container update-container">
                <div className="form-content">
                    <form className="form" onSubmit={updatePasswordSubmit}>
                        <h2>Update Password</h2>
                        <div className="input-group">
                            <input type="password" name="oldPassword" placeholder='Old Password' value={oldPassword} onChange={(e) => SetOldPassword(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input type="password" name="newPassword" placeholder='New Password' value={newPassword} onChange={(e) => SetNewPassword(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input type="password" name="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => SetConfirmPassword(e.target.value)} />
                        </div>
                        <button className="authBtn">Update Password</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdatePassword
