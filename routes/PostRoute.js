import express from "express";

import { CreatePost, GetPost } from "../controllers/postController.js";
const router = express.Router();

router.post("/", CreatePost);
router.get("/:id", GetPost);
// router.get("/:id", GetPostFromCart);
// router.delete("/:id", deletePost);
// router.post("/:id", addToCart);

export default router;
