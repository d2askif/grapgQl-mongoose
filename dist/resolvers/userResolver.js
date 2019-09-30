"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAuthenticationRequiredRresolver_1 = require("./isAuthenticationRequiredRresolver");
const userResolver = isAuthenticationRequiredRresolver_1.authenticationResolver.createResolver((root, args, ctx, info) => {
    return "User";
});
exports.default = userResolver;
//# sourceMappingURL=userResolver.js.map