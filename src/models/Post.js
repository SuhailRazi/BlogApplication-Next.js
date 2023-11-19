import mongoose from "mongoose";

const { Schema } = mongoose;

// Check if the model already exists to avoid recompilation
const Post = mongoose.models.Post || mongoose.model("Post", new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}, { timestamps: true }));

export default Post;
