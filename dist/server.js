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
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const dbConnect_1 = require("./dbConnect");
const ModelFactory_1 = require("./ModelFactory");
const schema_1 = require("./schema");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield dbConnect_1.dbConnect();
    const modelFactory = new ModelFactory_1.ModelFactory();
    const apolloServer = new apollo_server_1.ApolloServer({
        context: { modelFactory },
        schema: schema_1.schema,
        debug: false
    });
    apolloServer.listen().then(() => {
        console.log("server started at http://localhost:4000/graphql");
    });
});
main();
//# sourceMappingURL=server.js.map