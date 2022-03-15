import { Request, Response } from "express";
import normalize from 'normalize-path';

import { blogService } from "../services";

const list = async (req: Request, res: Response) => {
  const blogs = await blogService.getAllBlogs();
  // res.json(blogService.getAllBlogs());
  // res.send("These are all the articles");
  res.json(blogs);
};

const create = async (req: Request, res: Response) => {
  const data = { ...req.body, image: normalize(req.file?.path || '') };
  try {
    const blog = await blogService.saveToDB(data);
    res.json(blog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  list,
  create,
};
