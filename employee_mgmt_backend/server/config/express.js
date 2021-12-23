import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import SourceMapSupport from "source-map-support";
SourceMapSupport.install();

import index from "../routes/index.js";
import employee from "../routes/employee.js";

export default function (db) {
  const app = express();
  app.use(express.static("static"));
  app.use(bodyParser.json());

  //use logger
  app.use(morgan("dev"));

  //add routes
  // It has to be placed at the end of all routes
  app.get("/", index);
  app.use("/api/employee", employee);

  return app;
}
