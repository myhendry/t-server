import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  title: String
});

export default mongoose.model("Test", TestSchema);
