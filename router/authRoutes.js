import express from 'express';
import {
    forgetPassword,
    getUser,
    login,
    logout,
    register,
    resetPassword,
    updatePassword,
    updateProfile,
} from '../controllers/authController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", isAuthenticated, getUser);
authRouter.get("/logout", isAuthenticated, logout);
authRouter.post("/password/forget", forgetPassword);
authRouter.put("/password/reset/:token", resetPassword);
authRouter.put("/password/update", isAuthenticated, updatePassword);
authRouter.put("/profile/update", isAuthenticated, updateProfile);