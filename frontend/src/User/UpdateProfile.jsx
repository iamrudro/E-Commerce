import React, { useState } from 'react';
import '../UserStyles/Form.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

function UpdateProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("./images/avatar.jpg");

    const profileImageUpdate = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }
        reader.onerror = (error) => {
            toast.error('Error Reading file')
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <>
            <Navbar />
            <div className="container update-container">
                <div className="form-content">
                    <form className="form">
                        <h2>Update Profile</h2>
                        <div className="input-group avatar-group">
                            <input type="file" accept="image/" className="file-input" onChange={profileImageUpdate} />
                            <img src={avatarPreview} alt="User Profile" className="avatar" />
                        </div>
                        <div className="input-group">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="authBtn">Update</button>
                    </form>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default UpdateProfile