"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepo_1 = require("./userRepo");
const UserService_1 = require("./service/UserService");
class ModelFactory {
    constructor() { }
    createUserService() {
        const userModel = new userRepo_1.userRepo();
        const userService = new UserService_1.UserService(userModel);
        return userService;
    }
}
exports.ModelFactory = ModelFactory;
//# sourceMappingURL=ModelFactory.js.map