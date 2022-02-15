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
class DrugRepository {
    constructor(drugDao) {
        this.drugDAO = drugDao;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.drugDAO.findAll();
        });
    }
    findOne(drugEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.drugDAO.findOne({ where: { idd: drugEntity.id } });
        });
    }
    addNew(drugEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.drugDAO.create(drugEntity);
        });
    }
    update(drugEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.drugDAO.update(drugEntity);
        });
    }
    delete(drugEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.drugDAO.delete(drugEntity);
        });
    }
    findByName(drugEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.drugDAO.findOne({ where: { Name: drugEntity.name } });
        });
    }
}
//requetes sql
