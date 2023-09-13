import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectDB = () => {
  try {
    const connectingDB = mongoose.connect(process.env.MONGODB);
    console.log("db connected");
  } catch (error) {
    console.log("db not connecting");
  }
};
export default connectDB;
