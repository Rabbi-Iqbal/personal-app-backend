import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, 
  author: String,
  body: String,
  hidden: Boolean,
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
    required:'UpdateAt is a required field'
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
