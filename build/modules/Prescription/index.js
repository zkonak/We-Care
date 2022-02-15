"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_js_1 = __importDefault(require("./router.js"));
const controller_js_1 = __importDefault(require("./controller.js"));
const model_js_1 = __importDefault(require("./model.js"));
const models = { Prescription: model_js_1.default };
const controller = new controller_js_1.default(models);
const routes = (0, router_js_1.default)(controller);
exports.default = routes;
