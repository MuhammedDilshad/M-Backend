import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

import connectDB from "./config/config.js";
import postRouter from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";
import CartRouter from "./routes/CartRoute.js";
import CartClear from "./routes/CartClearRoute.js";

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();
connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("connected");
});

app.use("/post", postRouter);
app.use("/cart", CartRouter);
app.use("/clearcart", CartClear);
app.use("/upload", UploadRoute);
