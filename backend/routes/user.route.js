// routes/user.route.js
import express from "express";
import { register } from "../controllers/user.controller.js";

const router = express.Router();
router.post("/", register);

export default router;
