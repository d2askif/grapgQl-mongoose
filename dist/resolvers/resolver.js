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
const userResolver_1 = __importDefault(require("./userResolver"));
const signupResolver_1 = __importDefault(require("./signupResolver"));
const signInResolver_1 = __importDefault(require("./signInResolver"));
exports.default = {
    SingUpType: {
        __resolveType(obj) {
            if (obj.error) {
                return "Error";
            }
            return "SignUp";
        }
    },
    Query: {
        testMessage: (parent, { input }, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(ctx);
            return "Hello World!";
        }),
        user: userResolver_1.default
    },
    Mutation: {
        signUp: signupResolver_1.default,
        signIn: signInResolver_1.default
    }
};
//# sourceMappingURL=resolver.js.map