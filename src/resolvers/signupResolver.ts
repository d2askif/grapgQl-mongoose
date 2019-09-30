import { baseResolver } from "./baseResolver";
import signUpUser from "../actions/createUser";
import { SignUpType } from "../type/SignUpType";
import { IUser } from "../type/IUser";
import { ModelFactory } from "../ModelFactory";
import { InputDto } from "../type/inputDto";

const signUpResolver = baseResolver.createResolver(
  async (root, { input }: InputDto<IUser>, cxt, info): Promise<SignUpType> => {
    const modelFactory: ModelFactory = cxt.modelFactory;
    //return { token: "token" };
    const userService = modelFactory.createUserService();
    const resp = await signUpUser(userService, input);

    // userModel.create(args.input);
    return resp;
  }
);
export default signUpResolver;
