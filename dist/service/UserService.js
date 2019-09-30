"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorResolvers_1 = require("../resolvers/errorResolvers");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    createUser(input) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(new SignUpUserExist());
            const user = yield this.userModel.findOne({ email: input.email });
            if (!user) {
                try {
                    input.password = this.hashPassword(input.password);
                    const newUser = yield this.userModel.create(input);
                    const token = this.generateToken(newUser);
                    return { token };
                }
                catch (e) {
                    throw new errorResolvers_1.UnknownError();
                }
            }
            throw new errorResolvers_1.SignUpUserExist();
        });
    }
    hashPassword(password) {
        return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(10));
    }
    signIn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("here");
            try {
                const user = yield this.userModel.findOne({ email: input.email });
                if (user) {
                    const isUserAccount = this.comparePassword(user.password, input.password);
                    if (isUserAccount) {
                        const token = this.generateToken(user);
                        return { token };
                    }
                    throw new errorResolvers_1.NotYourAccount();
                }
                throw new errorResolvers_1.NoUserFound();
            }
            catch (e) {
                console.log("error");
                throw new errorResolvers_1.UnknownError();
            }
        });
    }
    generateToken(user) {
        const id = user._id;
        const token = jsonwebtoken_1.default.sign({ id }, "secret", { expiresIn: "10h" });
        return token;
    }
    comparePassword(hashPassword, password) {
        return bcrypt_1.default.compareSync(hashPassword, password);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map