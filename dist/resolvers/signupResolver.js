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
const baseResolver_1 = require("./baseResolver");
const createUser_1 = __importDefault(require("../actions/createUser"));
const signUpResolver = baseResolver_1.baseResolver.createResolver((root, { input }, cxt, info) => __awaiter(void 0, void 0, void 0, function* () {
    const modelFactory = cxt.modelFactory;
    console.log(input);
    //return { token: "token" };
    const userService = modelFactory.createUserService();
    const resp = yield createUser_1.default(userService, input);
    console.log(resp);
    // userModel.create(args.input);
    return resp;
}));
exports.default = signUpResolver;
//# sourceMappingURL=signupResolver.js.map