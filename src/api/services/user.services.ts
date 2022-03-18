import { User } from "../models";

const saveNewUser = async (data: any) => {
  const user = new User(data);
  try {
    const userRecord = await user.save();
    return userRecord;
  } catch (error) {
    throw error;
  }
};

const findUserById = async (id: string) => {
  try {
    const user = await User.findById(id).exec();
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email: string) => {
  try {
    const userRecord = await User.findOne({ email });
    return userRecord;
  } catch (error) {
    throw error;
  }
};
export default {
  saveNewUser,
  findUserByEmail,
  findUserById
};
