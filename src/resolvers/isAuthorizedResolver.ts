import { baseResolver } from "./baseResolver";
import { AuthorizationError } from "./errorResolvers";

export const isAuthorized = baseResolver.createResolver(
  (root, input, { user }, info) => {
    if (user.role !== "admin") {
      throw new AuthorizationError();
    }
  }
);
