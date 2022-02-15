"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    app_port: process.env.APP_PORT || 3050,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_password: process.env.DB_PASSWORD,
    jwt_secret: process.env.JWT_SECRET,
};
exports.default = env;
