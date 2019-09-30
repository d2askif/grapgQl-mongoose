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
const mongoose_1 = __importDefault(require("mongoose"));
class repositoryBase {
    constructor(name, schema) {
        this._model = mongoose_1.default.model(name, schema);
    }
    create(input) {
        return this._model.create(input);
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const x = yield this._model.findById(id);
            return x;
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const x = yield this._model.find({});
            return x;
        });
    }
    findOne(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findOne(input);
        });
    }
}
exports.repositoryBase = repositoryBase;
//# sourceMappingURL=repositoryBase.js.map