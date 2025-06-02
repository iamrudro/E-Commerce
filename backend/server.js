import app from "./app.js";
import dotenv from "dotenv";
import { connectMongoDataBase } from "./config/db.js";
dotenv.config({ path: 'backend/config/config.env' });
import { v2 as cloudinary } from 'cloudinary';
import Razorpay from "razorpay";
connectMongoDataBase();

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

// Handle Uncaught Exception Errors
process.on('uncaughtException', (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Server is shutting down, due to unhandled Exception Errors`);
    process.exit(1);
})

const port = process.env.PORT || 3000;

// Razorpay
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

// console.log(app);
const server = app.listen(port, () => {
    console.log(`Server is running on the PORT ${port}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Server is shutting down, due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1)
    })
})
