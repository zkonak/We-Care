import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import winston from "winston";
import Logger from "../helpers/logger.js";

const logger = new Logger(winston);

const middlewares = {
  cookie: cookieParser(),
  apiLogger: morgan("combined", { stream: logger.stream }),
  urlencoded: express.urlencoded({ extended: false }),
  json: express.json(),
};

export default middlewares;
export { logger };
