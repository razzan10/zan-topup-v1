import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import { UploadFoto } from "../controllers/upload.controllers.js";

const router = express.Router();

router.post("/", upload.single("image"), UploadFoto);

export default router;
