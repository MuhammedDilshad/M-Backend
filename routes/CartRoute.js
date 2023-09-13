import express from "express";

import {
  GetPostFromCart,
  addToCart,
  deletePost,
} from "../controllers/cartController.js";
const router = express.Router();

router.get("/:id", GetPostFromCart);
router.delete("/:id", deletePost);

router.post("/:id", addToCart);

export default router;
