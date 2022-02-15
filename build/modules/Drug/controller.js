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
class DrugController {
    // #models;
    // constructor(models) {
    //   this.#models = models;
    // }
    constructor(drugService) {
        this.getAll = ({ res, next }) => __awaiter(this, void 0, void 0, function* () {
            try {
                let drugs = yield this.drugService.getAll();
                res.status(200).json(drugs);
            }
            catch (err) {
                next(err);
            }
        });
        this.add = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const drug = yield this.drugService.add(Object.assign({}, req.body));
                res.status(201).json(drug);
            }
            catch (err) {
                next(err);
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            /*const drug = await this.drugService.findOne({
              try {
                const drug = await this.drugService.add({ ...req.body });
                res.status(201).json(drug);
              } catch (err) {
                next(err);
              }
            // if (!drug) {
            //   throw new ApiError("Ressource not exists");
            // }
        
             res.status(201).json(drug);
             */
        });
        this.update = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            /*const drugFound = await this.drugService.findOne({
             
                const drug = await this.drugService.add({ ...req.body });
                res.status(201).json(drug);
              } catch (err) {
                next(err);
              }
            //   where: { id },
            // });
            // if (!drugFound) {
            //   throw new ApiError("Ressource not exists");
            // }
        
            // await drugFound.update(data);
            res.status(201).json(drug);
            }
        */
        });
        this.delete = (req, res, next, id, data) => __awaiter(this, void 0, void 0, function* () {
            /* const drugFound = await this.drugService.findOne({
               try {
                 const drug = await this.drugService.add({ ...req.body });
                 res.status(201).json(drug);
               } catch (err) {
                 next(err);
               }
             //   where: { id },
             // });
             // if (!drugFound) {
             //   throw new ApiError("Ressource not exists");
             // }
         
             // await drugFound.delete();
         
             res.status(201).json(drugFound);
           };
           */
        });
        this.drugService = drugService;
    }
}
exports.default = DrugController;
//recupère et envoie les requêtes
