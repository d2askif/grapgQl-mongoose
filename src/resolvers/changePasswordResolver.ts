import { isAuthenticatedResolver } from "./isAuthenticationRequiredRresolver";
import { InputDto } from "../type/inputDto";
import { ModelFactory } from "../ModelFactory";
import { IChangePassword } from "../type/IChangePassword";
import changePassword from "../actions/changePasswordAction";

const changePasswordResolver = isAuthenticatedResolver.createResolver(
  (root, { input }: InputDto<IChangePassword>, cxt) => {
    const modelFactory: ModelFactory = cxt.modelFactory;
    const userService = modelFactory.createUserService();
    const { user } = cxt;

    return changePassword(userService, user, input);
  }
);

export default changePasswordResolver;
