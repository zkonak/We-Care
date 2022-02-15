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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    //#models;
    // constructor(models) {
    //   this.#models = models;
    //   this.secret = "aa";
    // }
    constructor(userService, jwtService) {
        this.compareHash = (password, hash) => __awaiter(this, void 0, void 0, function* () { return yield bcrypt_1.default.compareSync(password, hash); });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                //const newPatient = await this.#models.Patient.findOne();
                //   const userData = req.body;
                //   if (!userData.email || !userData.password)
                //     throw new ApiError(400, 'Missing required email and password fields');
                //   const user = await this.findByEmail(userData)
                //   if (!user)
                //    throw new ApiError(400, 'User with the specified email does not exists');
                //  const passwordMatch = await this.compareHash(userData.password, user.password);
                //  if (!passwordMatch)
                //    throw new ApiError(400, 'User password do not match');
                const user = yield this.userService.login(Object.assign({}, req.body));
                const token = yield jsonwebtoken_1.default.sign({ id: user.id }, this.secret);
                res.cookie("auth-cookie", token, { expiresIn: "30d" });
                res.status(200).json(user);
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        });
        this.add = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const salt = bcrypt.genSaltSync(10);
                // const userData = req.body;
                // userData.password = bcrypt.hashSync(req.body.password, salt);
                //const user = await this.#models.User.create({ ...userData });
                const user = yield this.userService.register(Object.assign({}, req.body));
                res.status(201).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.getOne(Object.assign({}, req.body));
                res.status(201).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.update(Object.assign({}, req.body));
                res.status(201).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.delete(Object.assign({}, req.body));
                res.status(201).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.userService = userService;
        this.jwtService = jwtService;
    }
    findByEmail(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await this.#models.User.findOne({
            //   where: { email: userEntity.email },
            // });
            return yield this.userService.findByEmail(Object.assign({}, req.body));
            //res.status(201).json(user);
        });
    }
}
exports.default = UserController;
