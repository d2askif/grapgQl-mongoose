import { createResolver } from "apollo-resolvers";
import { createError, isInstance } from "apollo-errors";

export const UnknownError = createError("UnKnownError", {
  message: "An unknown error has occurred! please try again."
});

export const baseResolver = createResolver(null, (root, args, ctx, error) =>
  isInstance(error) ? error : new UnknownError()
);
