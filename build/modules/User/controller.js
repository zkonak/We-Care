"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = __importDefault(require("../../libs/jwt"));
const core_1 = require("@overnightjs/core");
const middlewares_1 = require("../../middlewares");
let UserController = class UserController {
  //#models;
  // constructor(models) {
  //   this.#models = models;
  //   this.secret = "aa";
  // }
  constructor(userService, jwtService) {
    this.compareHash = (password, hash) =>
      __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compareSync(password, hash);
      });
    this.login = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const user = yield this.userService.login(
            Object.assign({}, req.body)
          );
          const token = yield jsonwebtoken_1.default.sign(
            { id: user.id },
            this.secret
          );
          res.cookie("auth-cookie", token, {
            expires: new Date(Date.now() + 30 * 86400 * 1000),
          });
          res.status(200).json(user);
        } catch (error) {
          console.log(error);
          next(error);
        }
      });
    this.add = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          // const salt = bcrypt.genSaltSync(10);
          // const userData = req.body;
          // userData.password = bcrypt.hashSync(req.body.password, salt);
          //const user = await this.#models.User.create({ ...userData });
          const user = yield this.userService.register(
            Object.assign({}, req.body)
          );
          res.status(201).json(user);
        } catch (err) {
          next(err);
        }
      });
    this.getOne = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const user = yield this.userService.getOne(
            Object.assign({}, req.body)
          );
          res.status(201).json(user);
        } catch (err) {
          next(err);
        }
      });
    this.update = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const user = yield this.userService.update(
            Object.assign({}, req.body)
          );
          res.status(201).json(user);
        } catch (err) {
          next(err);
        }
      });
    this.delete = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const user = yield this.userService.delete(
            Object.assign({}, req.body)
          );
          res.status(201).json(user);
        } catch (err) {
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
      return yield this.userService.findByEmail(userEntity);
      //res.status(201).json(user);
    });
  }
};
__decorate(
  [(0, core_1.Post)("login"), __metadata("design:type", Object)],
  UserController.prototype,
  "login",
  void 0
);
__decorate(
  [(0, core_1.Post)(), __metadata("design:type", Object)],
  UserController.prototype,
  "add",
  void 0
);
__decorate(
  [
    (0, core_1.Get)(),
    (0, core_1.Middleware)(middlewares_1.auth.isAuth),
    __metadata("design:type", Object),
  ],
  UserController.prototype,
  "getOne",
  void 0
);
__decorate(
  [(0, core_1.Put)(), __metadata("design:type", Object)],
  UserController.prototype,
  "update",
  void 0
);
__decorate(
  [(0, core_1.Delete)(), __metadata("design:type", Object)],
  UserController.prototype,
  "delete",
  void 0
);
UserController = __decorate(
  [
    (0, core_1.Controller)("users"),
    __metadata("design:paramtypes", [Object, jwt_1.default]),
  ],
  UserController
);
exports.default = UserController;
