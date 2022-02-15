"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("./User/index.js"));
const index_js_2 = __importDefault(require("./Prescription/index.js"));
const index_js_3 = __importDefault(require("./Consultation/index.js"));
const index_js_4 = __importDefault(require("./Service/index.js"));
const index_js_5 = __importDefault(require("./Drug/index.js"));
const index_js_6 = __importDefault(require("./DrugPrescription/index.js"));
const routes = {
    "/user": index_js_1.default,
    "/drug": index_js_5.default,
    "/drugprescription": index_js_6.default,
    "/prescription": index_js_2.default,
    "/consultation": index_js_3.default,
    "/service": index_js_4.default
};
exports.default = routes;
