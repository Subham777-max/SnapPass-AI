/**
 * Upload Routes
 * POST /api/upload  — Upload a photo
 * GET  /api/upload/:fileId — Get upload metadata
 */

import express from "express";
import { uploadPhoto, getUploadedPhoto } from "../controllers/upload.controller.js";
import { uploadMiddleware } from "../middlewares/upload.middleware.js";
import { validateUpload } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/", uploadMiddleware.single("photo"), validateUpload, uploadPhoto);
router.get("/:fileId", getUploadedPhoto);

export default router;
