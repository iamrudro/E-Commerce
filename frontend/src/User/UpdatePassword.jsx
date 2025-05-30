import React, { useEffect, useState } from 'react';
import '../UserStyles/Form.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeErrors, removeSuccess, updatePassword } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

function UpdatePassword() {
    const { success, loading, error } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [oldPassword, SetOldPassword] = useState("");
    const [newPassword, SetNewPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const updatePasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("oldPassword", oldPassword)
        myForm.set("newPassword", newPassword)
        myForm.set("confirmPassword", confirmPassword);
        dispatch(updatePassword(myForm))
    }


    useEffect(() => {
        if (error) {
            toast.error(error, { position: 'top-center', autoClose: 3000 });
            dispatch(removeErrors())
        }
    }, [dispatch, error])


    useEffect(() => {
        if (success) {
            toast.success("Password Updated Successfully", { position: 'top-center', autoClose: 3000 });
            dispatch(removeSuccess());
            navigate("/profile")
        }
    }, [dispatch, success])

    return (
        <>
            {loading ? (<Loader />) : (<>
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
            </>)}
        </>
    )
}

export default UpdatePassword
