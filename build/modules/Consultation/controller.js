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
class ConsultationController {
    //   #models;
    constructor(consultationService) {
        this.add = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consultation = yield this.consultationService.create(Object.assign({}, req.body));
                res.status(201).json(consultation);
            }
            catch (err) {
                next(err);
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consultation = yield this.consultationService.findOne({
                    consultation,
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.update = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            //  const consultationFound = await this.consultationService.findOne({
            //   where: { id },
            try {
                const consultationFound = yield this.consultationService.update(Object.assign({}, req.body));
            }
            catch (error) {
                next(error);
            }
            //});
            // if (!consultationFound) {
            //   throw new ApiError("Ressource not exists");
            // }
            //await consultationFound.update(data);
            // const consultation = await this.consultationService.findOne({
            //   where: {
            //     id,
            //   },
            //   attributes: { exclude: ["dateCreated"] },
            // });
            // res.status(201).json(consultation);
        });
        this.delete = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            //     const consultationFound = await this.consultationService.findOne({
            //       where: { id },
            //     });
            //     if (!consultationFound) {
            //       throw new ApiError("Ressource not exists");
            //     }
            //     await consultationFound.delete();
            //     res.status(201).json(consultationFound);
            try {
                const consultationDelete = yield this.consultationService.delete(Object.assign({}, req.body));
            }
            catch (error) {
                next(error);
            }
        });
        // this.#models = models;
        this.consultationService = consultationService;
    }
}
exports.default = ConsultationController;
