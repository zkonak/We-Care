"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { Model, DataTypes } = sequelize_1.default;
const db_js_1 = __importDefault(require("../../config/db.js"));
class ConsultationDao extends Model {
    static init(sequelize) {
        return super.init({
            id_patient: DataTypes.INTEGER,
            id_doctor: DataTypes.INTEGER,
            date: DataTypes.DATE,
            hour: DataTypes.TIME,
            valid: DataTypes.BOOLEAN,
        }, { sequelize, modelName: "Consultation" });
    }
    static associate(models) {
        models.Consultation.hasMany(models.Prescription);
    }
}
Consultation.init(db_js_1.default.sequelize);
exports.default = ConsultationDao;
