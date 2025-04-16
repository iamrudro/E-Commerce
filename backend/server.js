import app from "./app.js";
import dotenv from "dotenv";
import { connectMongoDataBase } from "./config/db.js";

dotenv.config({ path: 'backend/config/config.env' });
connectMongoDataBase();
const port = process.env.PORT || 3000;

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
