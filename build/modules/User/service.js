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
class UserService {
    constructor(userRepository, mailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepo.findAll();
            return users.map((user) => new dto_1.default(user));
        });
    }
    register(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userData.email || !userData.password)
                throw new ApiError_1.ApiError(400, "Missing required email and password fields");
            const newUser = yield this.userRepo.addNew(userData);
            yield this.mailerService.sendMail(userData);
            return new dto_1.default(newUser);
        });
    }
    login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userData.email || !userData.password)
                throw new ApiError_1.ApiError(400, "Missing required email and password fields");
            const user = yield this.userRepo.findByEmail(userData);
            if (!user)
                throw new ApiError_1.ApiError(400, "User with the specified email does not exists");
            const passwordMatch = yield this.userRepo.compareHash(userData.password, user.password);
            if (!passwordMatch)
                throw new ApiError_1.ApiError(400, "User password do not match");
            return new dto_1.default(user);
        });
    }
    findByEmail(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepo.findByEmail(new dto_1.default(userData));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepo.findOne(id);
        });
    }
    getOne(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.findOne(userData);
            if (!user) {
                //throw new ApiError("Ressource not exists");
            }
            return new dto_1.default(user);
        });
    }
    update(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getOne(userData);
            const userUpdated = this.userRepo.update(user);
            return new dto_1.default(userUpdated);
        });
    }
    delete(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getOne(userData);
            const userDeleted = this.userRepo.delete(user);
            return new dto_1.default(userDeleted);
        });
    }
}
exports.default = UserService;
