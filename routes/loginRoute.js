import express from "express";

import { loginTo } from "../controllers/loginController.js";
const router = express.Router();

router.post("/", loginTo);

export default router;
