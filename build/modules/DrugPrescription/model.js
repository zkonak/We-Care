"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { Model, DataTypes } = sequelize_1.default;
const db_js_1 = __importDefault(require("../../config/db.js"));
class DrugPrescription extends Model {
    static init(sequelize) {
        return super.init({
            frequent: DataTypes.STRING,
        }, { sequelize, modelName: "DrugPrescription" });
    }
    static associate(models) {
        // models.DrugPrescription.hasMany(models.Prescription);
    }
}
DrugPrescription.init(db_js_1.default.sequelize);
exports.default = DrugPrescription;
