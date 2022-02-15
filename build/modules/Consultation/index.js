"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcsultationDao = exports.consultationRouter = void 0;
const controller_1 = __importDefault(require("./controller"));
const repository_1 = __importDefault(require("./repository"));
const service_1 = __importDefault(require("./service"));
const router_1 = __importDefault(require("./router"));
const consultationRepository = new repository_1.default(consultationDao);
const consultationService = new service_1.default(consultationService);
const consultationController = new controller_1.default(consultationService);
const consultationRouter = new router_1.default(consultationController);
exports.consultationRouter = consultationRouter;
exports.default = routes;
