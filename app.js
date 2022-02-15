"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_js_1 = __importDefault(require("./src/config/env.js"));
const server_js_1 = __importDefault(require("./src/config/server.js"));
const middlewares_js_1 = __importDefault(require("./src/config/middlewares.js"));
const db_js_1 = __importDefault(require("./src/config/db.js"));
const errorHandler_js_1 = __importDefault(require("./src/middlewares/errorHandler.js"));
const index_js_1 = __importDefault(require("./src/modules/index.js"));
const http = (0, express_1.default)();
const server = new server_js_1.default(http);
server.middlewares(middlewares_js_1.default);
server.routes(index_js_1.default);
server.errorHandler(errorHandler_js_1.default);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //, force: true 
        yield db_js_1.default.associateAll(db_js_1.default.sequelize.models);
        yield db_js_1.default.sequelize.sync({ alter: true });
    }
    catch (e) {
        console.error(e);
    }
}))();
server.start(env_js_1.default.app_port);
