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
const signInUser_1 = __importDefault(require("../actions/signInUser"));
const baseResolver_1 = require("./baseResolver");
const signIn = baseResolver_1.baseResolver.createResolver((root, { input }, cxt) => __awaiter(void 0, void 0, void 0, function* () {
    const modelFactory = cxt.modelFactory;
    console.log(input);
    //return { token: "token" };
    const userService = modelFactory.createUserService();
    const res = yield signInUser_1.default(userService, input);
    return res;
}));
exports.default = signIn;
//# sourceMappingURL=signInResolver.js.map