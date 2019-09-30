import { ApolloServer } from "apollo-server";
import { dbConnect } from "./dbConnect";
import { ModelFactory } from "./ModelFactory";
import { schema } from "./schema";
import { resolveUser } from "./resolvers/resolveUser";

const context = async ({ req }: any) => {
  await dbConnect();
  const modelFactory = new ModelFactory();
  const user = await resolveUser(
    modelFactory.createUserService(),
    req.headers.authorization
  );
  return { user, modelFactory };
};

const main = async () => {
  const apolloServer = new ApolloServer({
    context,
    schema,
    debug: false
  });

  apolloServer.listen().then(() => {
    console.log("server started at http://localhost:4000/graphql");
  });
};

main();
