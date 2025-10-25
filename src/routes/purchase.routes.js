import express from "express";
import { getAllProductById } from "../controllers/purchase.controllers.js";

const router = express.Router();

router.get("/:gameId", getAllProductById);

export default router;
