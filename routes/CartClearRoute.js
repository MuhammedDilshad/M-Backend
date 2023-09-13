import express from "express";

import { clearPost } from "../controllers/cartClear.js";
const router = express.Router();

router.delete("/:id", clearPost);

export default router;
