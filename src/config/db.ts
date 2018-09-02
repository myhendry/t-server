import mongoose from "mongoose";

import { MLAB_URI } from "../constants";

mongoose.Promise = global.Promise;

mongoose.set("debug", true);

// Using MLab
try {
  mongoose.connect(
    MLAB_URI,
    {
      useNewUrlParser: true
    }
  );
} catch (error) {
  mongoose.createConnection(MLAB_URI, {
    useNewUrlParser: true
  });
}

// Using Local DB
// try {
//   mongoose.connect(
//     DB_URL,
//     {
//       useNewUrlParser: true
//     }
//   );
// } catch (error) {
//   mongoose.createConnection(DB_URL, {
//     useNewUrlParser: true
//   });
// }

mongoose.connection
  .once("open", () => console.log("MongoDB running"))
  .on("error", e => {
    throw e;
  });
