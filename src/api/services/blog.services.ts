
import { Blog } from "../models";

const saveToDB = async (data: any) => {

  const blog = new Blog(data);
  const blogRecord = await blog.save()
  return blogRecord 
}

export default  {
    saveToDB
}