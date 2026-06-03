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

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logout);
router.post("/password/forget", forgetPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/password/update", isAuthenticated, updatePassword);
router.put("/profile/update", isAuthenticated, updateProfile);