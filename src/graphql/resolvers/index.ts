import fetch from "node-fetch";

import TestResolvers from "./test-resolvers";
import PersonResolvers from "./person-resolvers";

const resolveFilms = (person: any) => {
  const promises = person.films.map(async (url: string) => {
    const res = await fetch(url);
    return res.json();
  });
  return Promise.all(promises);
};

export const resolvers = {
  Person: {
    films: resolveFilms,
    vehicles: (person: any) => {
      const promises = person.vehicles.map(async (url: string) => {
        const res = await fetch(url);
        return res.json();
      });

      return Promise.all(promises);
    },
    homeworld: async (person: any) => {
      const res = await fetch(person.homeworld);
      return res.json();
    }
  },
  Vehicle: {
    pilots: (vehicle: any) => {
      const promises = vehicle.pilots.map(async (url: string) => {
        const res = await fetch(url);
        return res.json();
      });

      return Promise.all(promises);
    }
  },
  Planet: {
    films: resolveFilms
  },
  Query: {
    hello: () => "Hello friend!",
    getTest: TestResolvers.getTest,
    getTests: TestResolvers.getTests,
    getPerson: PersonResolvers.getPerson
  },
  Mutation: {
    addTest: TestResolvers.addTest
  }
};
