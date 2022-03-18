import { UserModel } from "../../src/api/models";

declare global {
  namespace Express {
    interface Request {
      user: UserModel;
    }
  }
}
