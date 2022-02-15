"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const winston_1 = __importDefault(require("winston"));
const logger_js_1 = __importDefault(require("../helpers/logger.js"));
const logger = new logger_js_1.default(winston_1.default);
exports.logger = logger;
const middlewares = {
    cookie: (0, cookie_parser_1.default)(),
    apiLogger: (0, morgan_1.default)("combined", { stream: logger.stream }),
    urlencoded: express_1.default.urlencoded({ extended: false }),
    json: express_1.default.json(),
};
exports.default = middlewares;
