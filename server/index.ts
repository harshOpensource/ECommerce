import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { json } from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import { resolvers } from "./src/resolvers/index";
import { typeDefs } from "./src/typeDefs/index";
const func = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: ["http://localhost:3000", "http://localhost:4000"],
    }),
    json(),
    expressMiddleware(server)
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 5000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:5000/graphql`);
};
func();
