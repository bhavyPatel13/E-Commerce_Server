class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (error, request, responce, next) => {
    error.message = error.message || "Internal Server Error";
    error.statusCode = error.statusCode || 500;

    if (error.code === 11000) {
        const message = `Duplicate field value entered`;
        error = new ErrorHandler(message, 400);
    }

    if (error.name === "JsonWebTokenError") {
        const message = "JSON Web Token is invalid, try again";
        error = new ErrorHandler(message, 400);
    }

    if (error.name === "TokenExpiredError") {
        const message = "JSON web token is expired, try again";
        error = new ErrorHandler(message, 400)
    }

    const errorMessage = error.errors ? Object.values(error.errors).map((err) => err.message).join(" ") : error.message;
    return responce.status(error.statusCode).json({
        success: false,
        message: errorMessage
    })
}

export default ErrorHandler;