import { Blog } from "../models";
import mongoose from "mongoose";

const findBlogById = async (id: string) => {
  try {
    const blog = await Blog.findById(id).exec();
    return blog ? blog : {};
  } catch (error) {
    return {};
  }
};
const saveToDB = async (data: any) => {
  const blog = new Blog(data);
  const blogRecord = await blog.save();
  return blogRecord;
};

const getAllBlogs = async () => {
  const blogs = await Blog.find({});
  return blogs;
};

export default {
  findBlogById,
  saveToDB,
  getAllBlogs,
};
