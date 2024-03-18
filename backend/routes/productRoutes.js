import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get("/top", getTopProducts);
router.route("/:id/reviews").post(protect, checkObjectId, createProductReview);

router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
