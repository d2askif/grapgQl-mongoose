import { UserService } from "../service/UserService";
import { IUser } from "../type/IUser";
import { SignUpType } from "../type/SignUpType";

const signInUser = async (
  userService: UserService,
  input: IUser
): Promise<SignUpType> => {
  const resp = await userService.signIn(input);
  return resp;
};

export default signInUser;
