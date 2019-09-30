"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResolver_1 = require("./baseResolver");
const errorResolvers_1 = require("./errorResolvers");
exports.authenticationResolver = baseResolver_1.baseResolver.createResolver((root, args, { user }, info) => {
    console.log(user);
    if (!user)
        throw new errorResolvers_1.AuthenticationError();
});
//# sourceMappingURL=isAuthenticationRequiredRresolver.js.map