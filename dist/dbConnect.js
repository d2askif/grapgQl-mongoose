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
mongoose_1.default.Promise = global.Promise;
let isConnected;
const MONGO_URI2 = "mongodb://daniel.shenkutie:ict4rd2012@ds211865.mlab.com:11865/gql-nenja";
const MONGO_URI = "mongodb+srv://daniel:ict4rd2012@cluster0-j7d3x.mongodb.net/test?retryWrites=true&w=majority";
const DB_URL = MONGO_URI;
let Db = null;
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isConnected) {
            const monitor = mongoose_1.default.connection;
            monitor.on("open", () => {
                console.log("DB connected");
            });
            monitor.on("error", () => {
                console.log("DB connection error");
            });
            const connection = yield mongoose_1.default.connect(DB_URL, {
                useNewUrlParser: true
            });
            isConnected = connection.connection.readyState !== 0;
            Db = connection.connection.db;
            return Db;
        }
        return Db;
    });
}
exports.dbConnect = dbConnect;
//# sourceMappingURL=dbConnect.js.map