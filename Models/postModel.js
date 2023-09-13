import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: String,
    required: true,
  },
});

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
