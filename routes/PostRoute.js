import express from "express";

import { CreatePost, GetPost } from "../controllers/postController.js";
const router = express.Router();

router.post("/", CreatePost);
router.get("/:id", GetPost);

export default router;
