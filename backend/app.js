import express from 'express';
import product from './routes/productRoutes.js';
import user from './routes/userRoutes.js';
import order from './routes/orderRoutes.js';
import errorHandleMiddleware from './middleware/error.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv'
const app = express();

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

//Route
app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)

app.use(errorHandleMiddleware)
dotenv.config({ path: 'backend/config/config.env' })

export default app;
