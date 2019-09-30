import { UserService } from "../service/UserService";
import { User } from "../type/IUser";

export const listUsers = async (userService: UserService): Promise<User[]> => {
  const usersDocumentList = await userService.listUsers();
  const usersList = usersDocumentList.map(doc => ({
    email: doc.email,
    role: doc.role
  }));
  return usersList;
};
