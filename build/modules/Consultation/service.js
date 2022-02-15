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
const dto_1 = __importDefault(require("./dto"));
const ApiError_1 = require("../../helpers/ApiError");
class ConsultationService {
    constructor(consultationRepository) {
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const consultation = yield this.consultationRepository.findOne({
                where: {
                    id,
                },
                attributes: { exclude: ["createdAt", "updatedAt"] },
            });
            if (!consultation) {
                throw new ApiError_1.ApiError("Ressource not exists");
            }
            res.status(201).json(consultation);
        });
        this.update = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            const consultationFound = yield this.consultationRepository.findOne({
                where: { id },
            });
            if (!consultationFound) {
                throw new ApiError_1.ApiError("Ressource not exists");
            }
            yield consultationFound.update(data);
            const consultation = yield this.consultationService.findOne({
                where: {
                    id,
                },
                attributes: { exclude: ["dateCreated"] },
            });
            res.status(201).json(consultation);
        });
        this.delete = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            const consultationFound = yield this.consultationService.findOne({
                where: { id },
            });
            if (!consultationFound) {
                throw new ApiError_1.ApiError("Ressource not exists");
            }
            yield consultationFound.delete();
            res.status(201).json(consultationFound);
        });
        this.consultationRepository = consultationRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const consultations = yield this.consultationRepository.findAll();
            return consultations.map((consultation) => {
                new dto_1.default(consultation);
            });
        });
    }
    add(consultationData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!consultationData) {
                throw new ApiError_1.ApiError(400, "consultation validation failed");
            }
            const consultation = yield this.consultationRepository.addNew(consultationData);
            return new dto_1.default(consultation);
        });
    }
}
exports.default = ConsultationService;
