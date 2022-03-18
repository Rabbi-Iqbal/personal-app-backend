import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userService } from "../services";

const requireSingIn = async (req: Request, res: Response, next: Function) => {
  interface JwtPayload {
    _id: string;
  }
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("You need to be logged in");
  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_SECRET || ""
    ) as JwtPayload;
    //     console.log(JSON.parse(decoded))
    req.user = await userService.findUserById(decoded._id);
    console.log(req.user);
    //     next();
  } catch (error: any) {
    res.status(401).send("Invalid Token");
  }
};

export default { requireSingIn };
