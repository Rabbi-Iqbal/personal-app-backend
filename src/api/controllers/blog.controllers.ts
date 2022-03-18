import { Request, Response } from "express";
import normalize from "normalize-path";

import { blogService } from "../services";

const read = async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await blogService.findBlogById(id);
  console.log(blog)
  // const blogs = await blogService.getAllBlogs();
  res.json(blog);
};

const list = async (req: Request, res: Response) => {
  const blogs = await blogService.getAllBlogs();
  res.json(blogs);
};

const create = async (req: Request, res: Response) => {
  console.log(req.body)
  const data = { ...req.body, image: normalize(req.file?.path || "") };
  try {
    const blog = await blogService.saveToDB(data);
    res.json(blog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  read,
  list,
  create,
};
