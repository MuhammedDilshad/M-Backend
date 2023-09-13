import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import CartModel from "../Models/CartModel.js";

export const GetPostFromCart = async (req, res) => {
  const postId = req.params._id;
  try {
    const post = await CartModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addToCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await PostModel.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (product.productQuantity > 0) {
      let cartItem = await CartModel.findOne({ productId });

      if (cartItem) {
        cartItem.quantity += parseInt(1);
        product.productQuantity -= parseInt(1);
        cartItem.totel += parseInt(product.productPrice);
        await cartItem.save();
        await product.save();
      } else {
        const newCartItem = new CartModel({
          productId,
          quantity: 1,
          price: product.productPrice,
          productName: product.productName,
          totel: product.productPrice,
          image: product.image,
        });
        cartItem = await newCartItem.save();
      }

      return res
        .status(200)
        .json({ message: "Product added to cart successfully", cartItem });
    } else {
      return res.status(400).json({ error: "Product is out of stock" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  const productId = req.params.id;
  try {
    const post = await CartModel.findOne({ productId });
    const product = await PostModel.findById(productId);

    if (!post || !product) {
      return res.status(404).json({ error: "Cart item or product not found" });
    }
    if (post.quantity > 1) {
      post.quantity -= 1;
      product.productQuantity += parseInt(1);
      post.totel -= product.productPrice;
      await post.save();
      await product.save();

      return res
        .status(200)
        .json({ message: "Product quantity updated successfully" });
    } else {
      await post.deleteOne();
      return res
        .status(200)
        .json({ message: "Cart item deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
