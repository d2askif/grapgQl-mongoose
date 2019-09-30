import { IUser } from "../userRepo";
import { SignUpType } from "../type/SignUpType";
import { UserService } from "../service/UserService";

const signUpUser = async (
  userService: UserService,
  input: IUser
): Promise<SignUpType> => {
  const user = await userService.createUser(input);
  return user;
};
export default signUpUser;
