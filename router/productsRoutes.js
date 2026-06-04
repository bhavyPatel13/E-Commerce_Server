import express from "express";
import {
    createProduct,
    fetchAllProducts,
    updateProduct,
    deleteProduct,
    // fetchSingleProduct,
    // postProductReview,
    // deleteReview,
    // fetchAIFilteredProducts,
} from "../controllers/productController.js";
import {
    autherizeRoles,
    isAuthenticated,
} from "../middlewares/authMiddleware.js";


export const productRouter = express.Router();

productRouter.post(
    "/admin/create",
    isAuthenticated,
    autherizeRoles("Admin"),
    createProduct
);
productRouter.get("/", fetchAllProducts);
// productRouter.get("/singleProduct/:productId", fetchSingleProduct);
// productRouter.put("/post-new/review/:productId", isAuthenticated, postProductReview);
// productRouter.delete("/delete/review/:productId", isAuthenticated, deleteReview);
productRouter.put(
    "/admin/update/:productId",
    isAuthenticated,
    autherizeRoles("Admin"),
    updateProduct
);
productRouter.delete(
    "/admin/delete/:productId",
    isAuthenticated,
    autherizeRoles("Admin"),
    deleteProduct
);
// productRouter.post("/ai-search", isAuthenticated, fetchAIFilteredProducts);