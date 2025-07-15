import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }, 
    author: { type: String, default: "ResQ Team" },
    readTime: { type: String, default: "5 Min Read" },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
