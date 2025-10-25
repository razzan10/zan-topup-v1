import express from "express";
import {
  createProducts,
  deleteProductById,
  editProductsById,
  getAllProducts,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProducts);
router.delete("/:id", deleteProductById);
router.put("/:id", editProductsById);

export default router;
