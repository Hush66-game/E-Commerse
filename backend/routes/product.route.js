import express from "express";
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product.controller.js"; 

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;