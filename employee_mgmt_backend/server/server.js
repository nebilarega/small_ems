import express from "./config/express.js";
import mongoose from "mongoose";
import config from "./config/config.js";

const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(config.db.url, config.db.preferences)
  .then((connection) => {
    app.listen(process.env.PORT, () => {
      console.log("App started on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
console.log(`the url is given as : ${config.db.url}`);
