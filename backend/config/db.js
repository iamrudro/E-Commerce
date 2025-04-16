import mongoose from "mongoose";

export const connectMongoDataBase = () => {
    mongoose.connect(process.env.DB_URL).then((data) => {
        console.log(`MongoDB Connected with the server ${data.connection.host}`);
    })
    // .catch((err) => {
    //     console.log(err.message);
    // })
}
