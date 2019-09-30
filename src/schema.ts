import { makeExecutableSchema } from "graphql-tools";
import userResolver from "./resolvers/resolver";
import typeDefs from "./schema/schema";

export const schema = makeExecutableSchema({
  resolvers: [userResolver],
  typeDefs: [typeDefs]
});
