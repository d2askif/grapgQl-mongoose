import { createResolver } from "apollo-resolvers";
import { isAuthenticatedResolver } from "./isAuthenticationRequiredRresolver";
import { NotYourAccount } from "./errorResolvers";

const userResolver = isAuthenticatedResolver.createResolver(
  (root, args, ctx, info) => {
    return "User";
  }
);
export default userResolver;
