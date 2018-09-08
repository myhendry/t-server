import Test from "../../modules/test/test.model";

export default {
  getTest: (_: any, { _id }: { _id: string }) => {
    try {
      const res = Test.findById(_id);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getTests: () => {
    try {
      const res = Test.find({});
      return res;
    } catch (error) {
      throw error;
    }
  },
  addTest: (_: any, args: any) => {
    try {
      const res = Test.create({ ...args });
      return res;
    } catch (error) {
      throw error;
    }
  }
};
