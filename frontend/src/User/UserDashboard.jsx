import React from 'react';
import '../UserStyles/UserDashboard.css';
import { useNavigate } from 'react-router-dom';

function UserDashboard({ user }) {
    const naviagte = useNavigate();
    const options = [
        { name: 'Orders', funcName: orders },
        { name: 'Account', funcName: profile },
        { name: 'Logout', funcName: logout },
    ]

    if (user.role === 'admin') {
        options.unshift({
            name: 'Admin Dashboard', funcName: dashboard
        })
    }

    function orders() {
        naviagte("/orders/user")
    }
    function profile() {
        naviagte("/profile")
    }
    function logout() {
        console.log('logout')
    }
    function dashboard() {
        naviagte("/admin/dashboard")
    }

    return (
        <div className="dashboard-container">
            <div className="profile-header">
                <img src={user.avatar.url ? user.avatar.url : './images/avatar.jpg'} alt="Profile Picture" className='profile-avatar' />
                <span className="profile-name">{user.name || 'User'}</span>
            </div>

            <div className="menu-options">
                {options.map((item) => (
                    <button key={item.name} className="menu-option-btn" onClick={item.funcName}>{item.name}</button>
                ))}
            </div>
        </div>
    )
}

export default UserDashboard
