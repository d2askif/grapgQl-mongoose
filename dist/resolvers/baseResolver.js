"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_resolvers_1 = require("apollo-resolvers");
const apollo_errors_1 = require("apollo-errors");
exports.UnknownError = apollo_errors_1.createError("UnKnownError", {
    message: "An unknown error has occurred! please try again."
});
exports.baseResolver = apollo_resolvers_1.createResolver(null, (root, args, ctx, error) => apollo_errors_1.isInstance(error) ? error : new exports.UnknownError());
//# sourceMappingURL=baseResolver.js.map