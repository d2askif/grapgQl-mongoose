import { createError } from "apollo-errors";

export const UnknownError = createError("UnKownError", {
  message: "An unknown error has occurred! please try again."
});

export const AuthorizationError = createError("AuthorizationError", {
  message: "Not Authorized to perform this action"
});
export const AuthenticationError = createError("AuthenticationError", {
  message: "You need to be logged in to do this "
});

export const NotYourAccount = createError("NotYourAccount", {
  message: "This is not your account"
});

export const SignUpUserExist = createError("UserExist", {
  message: "User with the this email already exists"
});

export const NoUserFound = createError("NoUserFound", {
  message: "No user found with the this email"
});
