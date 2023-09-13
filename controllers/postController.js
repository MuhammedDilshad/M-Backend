import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import CartModel from "../Models/CartModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const CreatePost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const GetPost = async (req, res) => {
  const postId = req.params._id;
  try {
    const post = await PostModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
