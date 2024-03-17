import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
