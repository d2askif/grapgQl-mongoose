"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositoryBase_1 = require("./repositoryBase");
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const schema = new mongoose_1.Schema({
    email: { type: String, index: { unique: true }, required: true },
    password: { type: String, required: true }
});
class userRepo extends repositoryBase_1.repositoryBase {
    constructor() {
        super("user", schema);
    }
    hashPassword(password) {
        return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(10));
    }
    create(newUSer) {
        const hashs = "hashs";
        newUSer.password = this.hashPassword(newUSer.password);
        return this._model.create(newUSer);
    }
}
exports.userRepo = userRepo;
//# sourceMappingURL=userRepo.js.map