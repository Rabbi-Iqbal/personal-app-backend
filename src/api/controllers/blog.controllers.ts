import { Request, Response } from "express";
import { blogService } from "../services";

const list = (req: Request, res: Response) => {
  res.send("These are all the articles");
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const blog = await blogService.saveToDB(data);
    res.json(blog);
  } catch (error) {
    res.status(400).send(error.message)
  }
};

export default {
  list,
  create,
};
