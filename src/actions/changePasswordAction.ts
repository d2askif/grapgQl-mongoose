import { IChangePassword } from "../type/IChangePassword";
import { UserService } from "../service/UserService";
import { IUserDocument } from "../type/IUser";

const changePassword = (
  userService: UserService,
  user: IUserDocument,
  change: IChangePassword
): Promise<boolean> => {
  return userService.changePassword(user, change);
};

export default changePassword;
