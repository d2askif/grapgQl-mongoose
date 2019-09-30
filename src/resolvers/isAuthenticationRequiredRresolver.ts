import { baseResolver } from "./baseResolver";
import { AuthenticationError } from "./errorResolvers";

export const isAuthenticatedResolver = baseResolver.createResolver(
  // Extract the user from context (undefined if non-existent)
  (root, args, { user }, info) => {
    if (!user) {
      throw new AuthenticationError();
    }
  }
);
