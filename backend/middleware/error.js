import HandleError from "../utils/handleError.js";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Cast Error
    if (err.name === 'CastError') {
        const message = `This is invalid resource ${err.path}`;
        err = new HandleError(message, 404)
    }


    // Duplicate key error
    if (err.code === 11000) {
        const message = `This ${Object.keys(err.keyValue)} is already registered . Please log in to continue`;
        err = new HandleError(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}