import { IUser } from "../type/IUser";
import signInUser from "../actions/signInUser";
import { baseResolver } from "./baseResolver";
import { InputDto } from "../type/inputDto";
import { ModelFactory } from "../ModelFactory";

const signIn = baseResolver.createResolver(
  async (root, { input }: InputDto<IUser>, cxt) => {
    const modelFactory: ModelFactory = cxt.modelFactory;
    const userService = modelFactory.createUserService();
    const res = await signInUser(userService, input);
    return res;
  }
);
export default signIn;
