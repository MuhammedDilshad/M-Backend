import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import CartModel from "../Models/CartModel.js";

export const clearPost = async (req, res) => {
  const productId = req.params.id;

  try {
    const post = await CartModel.findOne({ productId });
    const product = await PostModel.findById(productId);
    if (!post || !product) {
      return res.status(404).json({ error: "Cart item or product not found" });
    }

    product.productQuantity += post.quantity;

    await product.save();
    await CartModel.deleteOne({ productId });

    return res.status(200).json({ message: "Cart item cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart item:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
