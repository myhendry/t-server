import fetch from "node-fetch";

export default {
  getPerson: async (_: any, { id }: { id: string }) => {
    try {
      const res = await fetch(`https://swapi.co/api/people/${id}/`);
      return res.json();
    } catch (error) {
      throw error;
    }
  }
};
