import express from "express";
import env from "./src/config/env.js";
import Server from "./src/config/server.js";
import middlewares from "./src/config/middlewares.js";
import db from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import routes from "./src/modules/index.js";

const http = express();
const server = new Server(http);
server.middlewares(middlewares);
server.routes(routes);
server.errorHandler(errorHandler);
(async () => {
  try {
    //, force: true 
    await db.associateAll(db.sequelize.models);
    await db.sequelize.sync({ alter: true});
  } catch (e) {
    console.error(e);
    
  }
})();
server.start(env.app_port);
