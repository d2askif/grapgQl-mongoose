import { isAuthorized } from "./isAuthorizedResolver";
import { ModelFactory } from "../ModelFactory";
import { listUsers } from "../actions/listUsersAction";
export const listUsersResolver = isAuthorized.createResolver(
  (root, args, context, info) => {
    const modelFactory: ModelFactory = context.modelFactory;
    return listUsers(modelFactory.createUserService());
  }
);
export default listUsersResolver;
