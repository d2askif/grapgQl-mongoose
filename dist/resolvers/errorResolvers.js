"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_errors_1 = require("apollo-errors");
exports.UnknownError = apollo_errors_1.createError("UnKownError", {
    message: "An unknown error has occurred! please try again."
});
exports.AuthorizationError = apollo_errors_1.createError("AuthorizationError", {
    message: "Not Authorized to perform this action"
});
exports.AuthenticationError = apollo_errors_1.createError("AuthenticationError", {
    message: "You need to be logged in to do this "
});
exports.NotYourAccount = apollo_errors_1.createError("NotYourAccount", {
    message: "This is not your account"
});
exports.SignUpUserExist = apollo_errors_1.createError("UserExist", {
    message: "User with the this email already exists"
});
exports.NoUserFound = apollo_errors_1.createError("NoUserFound", {
    message: "No user found with the this email"
});
//# sourceMappingURL=errorResolvers.js.map