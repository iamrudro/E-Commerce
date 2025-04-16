import HandleError from "../utils/handleError.js";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Cast Error
    if (err.name === 'castError') {
        const message = `This is invalid resource ${err.path}`;
        err = new HandleError(message, 404)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}