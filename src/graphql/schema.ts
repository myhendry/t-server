import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Test {
    _id: ID!
    title: String
  }

  type Person {
    name: String
    height: String
    mass: String
    homeworld: Planet
    films: [Film]
    vehicles: [Vehicle]
  }

  type Planet {
    name: String
    diameter: String
    climate: String
    terrain: String
    population: String
    films: [Film]
  }

  type Film {
    title: String
    episode_id: Int
    director: String
    producer: String
    releaseDate: String
  }

  type Vehicle {
    name: String
    model: String
    manufacturer: String
    length: String
    crew: String
    passengers: String
    pilots: [Person]
  }

  type Query {
    hello: String
    getTest(_id: ID!): Test
    getTests: [Test]
    getPerson(id: Int!): Person
  }

  type Mutation {
    addTest(title: String): Test
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
