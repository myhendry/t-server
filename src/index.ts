import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
dotenv.config();
dotenv.load();

import middlewaresConfig from "./config/middlewares";
import { CustomerRoutes, TestRoutes } from "./modules";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import "./config/db";

// Initiate Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Initiate Express Server
const app = express();

// Middlewares
middlewaresConfig(app);
server.applyMiddleware({ app });

// Routes
app.post("/", (req, res) => {
  console.log(req.body);
  res.send({
    ...req.body
  });
});
app.use("/api/v1/test", TestRoutes);
app.use("/api/v1/customers", CustomerRoutes);

const port = process.env.PORT || 4000;

app.listen({ port }, () =>
  console.log(
    `🚀 GraphQL Server ready at http://localhost:4000${server.graphqlPath}`
  )
);
