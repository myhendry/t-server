import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
dotenv.config();
dotenv.load();

import middlewaresConfig from "./config/middlewares";
import { CustomerRoutes, TestRoutes } from "./modules";

import "./config/db";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    hey: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    hey: () => "Hey there!"
  }
};

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
