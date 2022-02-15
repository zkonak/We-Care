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
Object.defineProperty(exports, "__esModule", { value: true });
class ConsultationRepository {
    constructor(consultationDao) {
        this.consultationDao = consultationDao;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultationDao.findAll();
        });
    }
    addNew(consultationEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ConsultationDao.create(consultationEntity);
        });
    }
    findOne(consultationEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultationDao.findOne({
                where: { id_patien: consultationEntity.id },
            });
        });
    }
    update(consultationEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultationDao.update({
                consultationEntity,
            });
        });
    }
    delete(consultationEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.consultationEntity.delete({
                consultationEntity,
            });
        });
    }
}
exports.default = ConsultationRepository;
