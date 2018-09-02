import Test from "./test.model";

export const shoutOut = async (req: any, res: any) => {
  try {
    const doc = await Test.create(req.body);
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
