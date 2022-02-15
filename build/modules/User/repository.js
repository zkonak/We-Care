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
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserRepository {
    constructor(userDao) {
        this.compareHash = (password, hash) => __awaiter(this, void 0, void 0, function* () { return yield bcrypt_1.default.compareSync(password, hash); });
        this.userDAO = userDao;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDAO.findAll({ include: "Service" });
        });
    }
    addNew(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = bcrypt_1.default.genSaltSync(10);
            userEntity.password = bcrypt_1.default.hashSync(userEntity.password, salt);
            return yield this.userDAO.create(userEntity);
        });
    }
    findByEmail(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDAO.findOne({ where: { email: userEntity.email } });
        });
    }
    findOne(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDAO.findOne({ where: { id: userEntity.id } });
        });
    }
    update(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDAO.update(userEntity);
        });
    }
    delete(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userDAO.delete(userEntity);
        });
    }
}
exports.default = UserRepository;
