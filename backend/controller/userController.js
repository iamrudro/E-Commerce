import handleAsyncError from "../middleware/handleAsyncError.js";
import User from '../models/userModel.js';
import HandleError from '../utils/handleError.js';
import { sendToken } from "../utils/jwtToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

// 🖥️Register
export const registerUser = handleAsyncError(async (req, res, next) => {
    const { name, email, password, avatar } = req.body;
    const myCloud = await cloudinary.uploader.upload(avatar, {
        folder: 'avatars',
        width: 150,
        crop: 'scale'
    })
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    })
    sendToken(user, 201, res)
})


// 🧑🏻‍💻Login 
export const loginUser = handleAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new HandleError("Email or password cannot be empty", 400))
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new HandleError("Invalid Email or password", 401))
    }

    const isPasswordValid = await user.verifyPassword(password);
    if (!isPasswordValid) {
        return next(new HandleError("Invalid Email or password", 401))
    }

    // const token = user.getJWTToken();
    // res.status(200).json({
    //     success: true,
    //     user,
    //     token
    // })

    sendToken(user, 200, res)
})

// 🖥️Logout
export const logout = handleAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Successfully logged out"
    })
})


// Forget Password
export const requestPasswordReset = handleAsyncError(async (req, res, next) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return next(new HandleError("User doesn't exist", 400))
    }
    let resetToken;
    try {
        resetToken = user.generatePasswordResetToken()
        await user.save({ validateBeforeSave: false })
    } catch (error) {
        return next(new HandleError("Could not save reset token,Please try again later", 500))
    }
    const resetPasswordURL = `${req.protocol}://${req.get('host')}/reset/${resetToken}`;
    const message = `Use the follwoing link to reset your password: ${resetPasswordURL}. \n\n This link will expire in 30 minutes. \n\n If you didn't request a password reset , please ignore this message.`;
    try {
        // Send Email📧
        await sendEmail({
            email: user.email,
            subject: 'Password Reset Request',
            message
        })
        res.status(200).json({
            success: true,
            message: `Email is send to ${user.email} successfully`
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false })
        return next(new HandleError("Email could not be sent, Please try again later", 500))
    }
})


// Reset Password
export const resetPassword = handleAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })
    if (!user) {
        return next(new HandleError("Reset password token is invalid or has been expired", 400))
    }
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return next(new HandleError("Password doesn't Match", 400))
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res)
})

// Get user Details🧑🏻‍🎨
export const getUserDetails = handleAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success: true,
        user
    })
})

// Update existing password
export const updatePassword = handleAsyncError(async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const user = await User.findById(req.user.id).select('+password');
    const checkPasswordMatch = await user.verifyPassword(oldPassword);
    if (!checkPasswordMatch) {
        return next(new HandleError("Old Password is incorrect", 400))
    }
    if (newPassword !== confirmPassword) {
        return next(new HandleError("Password doesn't match", 400))
    }
    user.password = newPassword;
    await user.save();
    sendToken(user, 200, res);
})

// Update user Profile
export const updateProfile = handleAsyncError(async (req, res, next) => {
    const { name, email, avatar } = req.body;
    const updateUserDetails = {
        name,
        email
    }
    if (avatar !== "") {
        const user = await User.findById(req.user.id);
        const imageID = user.avatar.public_id
        await cloudinary.uploader.destroy(imageID)
        const mycloud = await cloudinary.uploader.upload(avatar, {
            folder: 'avatars',
            width: 150,
            crop: 'scale'
        })
        updateUserDetails.avatar = {
            public_id: mycloud.public_id,
            url: mycloud.secure_url
        }
    }
    const user = await User.findByIdAndUpdate(req.user.id, updateUserDetails, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user
    })
})


// Admin - Getting user information
export const getUserList = handleAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    })
})


// Admin - Getting single user information
export const getSingleUser = handleAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new HandleError(`User doesn't exist with this id:${req.params.id}`, 400))
    }
    res.status(200).json({
        success: true,
        user
    })
})


// Admin - Changing User Role
export const updateUserRole = handleAsyncError(async (req, res, next) => {
    const { role } = req.body;
    const newUserData = {
        role
    }
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true
    })
    if (!user) {
        return next(new HandleError("User doesn't exist", 400))
    }
    res.status(200).json({
        success: true,
        user
    })
})

// Admin - Delete user profile
export const deleteUser = handleAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new HandleError("User doesn't exist", 400))
    }
    const imageId = user.avatar.public_id;
    await cloudinary.uploader.destroy(imageId)

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: "User deleted Successfully"
    })
})