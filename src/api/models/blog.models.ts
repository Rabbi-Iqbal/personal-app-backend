import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  summary: String,
  hidden: Boolean,
  image: String,
  status: {
    type: String,
    default: "Draft",
    enum: ["Draft", "Published"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  publishedAt: {
    type: Date,
  },
  meta: {
    votes: Number,
    favs: Number,
  },
});

export default mongoose.model("Blog", blogSchema);
