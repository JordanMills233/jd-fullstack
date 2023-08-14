import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  description: String,
  data: String,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
