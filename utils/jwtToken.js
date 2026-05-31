import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({ path: "./config/config.env" });

export const sendToken = (user, statusCode, message, res) => {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const cookieExpiryDays = parseInt(process.env.COOKIE_EXPIRES_IN, 10) || 7;

    res.status(statusCode).cookie("token", token, {
        expires: new Date(Date.now() + cookieExpiryDays * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "None"
    }).json({
        success: true,
        user,
        message,
        token
    });
};