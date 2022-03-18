import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userService } from "../services";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
  const { name, userName, email } = req.body;
  const hasedPassoword = await bcrypt.hash(req.body.password, 10);
  const user = {
    name,
    userName,
    email,
    password: hasedPassoword,
  };
  try {
    await userService.saveNewUser(user);
    res.status(201).send("User has been registered successfully!");
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const userRecord = await userService.findUserByEmail(req.body.email);

    //check if user exists
    if (!userRecord) {
      return res.status(400).send("Email or password is wrong");
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      userRecord.password
    );
    if (!validPassword) {
      return res.status(400).send("Email or password is wrong");
    }

    //create jwt
    const token = jwt.sign(
      {
        _id: userRecord._id,
        useName: userRecord.userName,
      },
      process.env.TOKEN_SECRET || ""
    );

    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(500).send(error);
  }
};
export default {
  register,
  login,
};
