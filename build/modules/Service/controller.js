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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ServiceController_models;
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_js_1 = __importDefault(require("../../helpers/ApiError.js"));
class ServiceController {
    constructor(models) {
        _ServiceController_models.set(this, void 0);
        this.add = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const service = yield __classPrivateFieldGet(this, _ServiceController_models, "f").Service.create(Object.assign({}, req.body));
                res.status(201).json(service);
            }
            catch (err) {
                next(err);
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const service = yield __classPrivateFieldGet(this, _ServiceController_models, "f").Service.findAll({
                where: {
                    id
                },
                attributes: { exclude: ["createdAt", "updatedAt"] },
            });
            if (!service) {
                throw new ApiError_js_1.default("Ressource not exists");
            }
            res.status(201).json(service);
        });
        this.update = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            const serviceFound = yield __classPrivateFieldGet(this, _ServiceController_models, "f").Service.findOne({
                where: { id },
            });
            if (!serviceFound) {
                throw new ApiError_js_1.default("Ressource not exists");
            }
            yield serviceFound.update(data);
            const service = yield __classPrivateFieldGet(this, _ServiceController_models, "f").Service.findOne({
                where: {
                    id
                },
                attributes: { exclude: ["dateCreated"] },
            });
            res.status(201).json(service);
        });
        this.delete = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            const serviceFound = yield __classPrivateFieldGet(this, _ServiceController_models, "f").Service.findOne({
                where: { id },
            });
            if (!serviceFound) {
                throw new ApiError_js_1.default("Ressource not exists");
            }
            yield serviceFound.delete();
            res.status(201).json(serviceFound);
        });
        __classPrivateFieldSet(this, _ServiceController_models, models, "f");
    }
}
_ServiceController_models = new WeakMap();
exports.default = ServiceController;
