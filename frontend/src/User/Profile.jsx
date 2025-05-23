import React from 'react'
import '../UserStyles/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-image">
                <h1 className="profile-heading">My Profile</h1>
                <img src="" alt="User Profile" className="profile-image" />
                <Link to="/password/update">Edit Profile</Link>
            </div>
            <div className="profile-details">
                <div className="profile-detail">
                    <h2>Username:</h2>
                    <p>Rudranil</p>
                </div>
                <div className="profile-detail">
                    <h2>Email:</h2>
                    <p>rudranil.das9900@gmail.xom</p>
                </div>
                <div className="profile-detail">
                    <h2>Joined on:</h2>
                    <p>23/05/2025</p>
                </div>
            </div>
            <div className="profile-buttons">
                <Link to="/orders/user">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
            </div>
        </div>
    )
}

export default Profile
