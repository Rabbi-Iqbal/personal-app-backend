import { Blog } from "../models";

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
  saveToDB,
  getAllBlogs,
};
