import jwt from "jsonwebtoken";
import { UserService } from "../service/UserService";
import { resolve } from "dns";
const secret = "secret";

type userData = {
  id: string;
};
const decodeToken = async (token: string): Promise<userData | null> => {
  const userInfo: userData | null = await new Promise(resolve => {
    jwt.verify(
      token,
      secret,
      { ignoreExpiration: true },
      (error: any, result: any) => {
        resolve(error ? null : result);
      }
    );
  });

  return userInfo;
};

export const resolveUser = async (userService: UserService, token: string) => {
  const userInfo = await decodeToken(token);
  if (userInfo) {
    const user = await userService.findUserById(userInfo.id);
    return user;
  }
  return null;
};
