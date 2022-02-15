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
const error_1 = require("../../helpers/error");
class DrugService {
    constructor(drugRepository) {
        this.drugRepo = drugRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const drugs = yield this.drugRepo.findAll();
            return drugs.map((user) => new DrugsDTO(drug));
        });
    }
    add(drugData) {
        return __awaiter(this, void 0, void 0, function* () {
            const drugFound = yield this.drugRepo.findbyName(drugData);
            if (!drugFound)
                throw new error_1.ApiError(400, "Drug already exists");
            const drug = yield this.drugRepo.addNew(drugData);
            return new dto_1.default(drug);
        });
    }
    update(drugData) {
        return __awaiter(this, void 0, void 0, function* () {
            const drugFound = yield this.drugRepo.findbyName(drugData);
            if (drugFound)
                throw new error_1.ApiError(400, "Drug doesn't exists");
            const drug = yield this.drugRepo.delete(drugData);
            return new dto_1.default(drug);
        });
    }
    delete(drugData) {
        return __awaiter(this, void 0, void 0, function* () {
            const drugFound = yield this.drugRepo.findbyName(drugData);
            if (drugFound)
                throw new error_1.ApiError(400, "Drug doesn't exists");
            const drug = yield this.drugRepo.delete(drugData);
            return new dto_1.default(drug);
        });
    }
}
exports.default = UserService;
//validation et creation objet data
