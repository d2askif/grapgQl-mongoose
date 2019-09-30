import { Role } from "../type/IUser";
import user from "./userResolver";
import signUp from "./signupResolver";
import signIn from "./signInResolver";
import { IChangePassword } from "../type/IChangePassword";
import changePassword from "./changePasswordResolver";
import listUsers from "./listUsersResolver";
export default {
  Role,
  SingUpType: {
    __resolveType(obj: any) {
      if (obj.error) {
        return "Error";
      }
      return "SignUp";
    }
  },
  Query: {
    testMessage: (parent: any, { input }: any, ctx: any, info: any): string => {
      return "Hello World!";
    },
    user,
    listUsers
  },
  Mutation: {
    signUp,
    signIn,
    changePassword
  }
};
