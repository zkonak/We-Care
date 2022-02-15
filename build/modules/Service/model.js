"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { Model, DataTypes } = sequelize_1.default;
const db_js_1 = __importDefault(require("../../config/db.js"));
class Service extends Model {
    static init(sequelize) {
        return super.init({
            name: DataTypes.STRING,
        }, { sequelize, modelName: "Service" });
    }
    static associate(models) {
        models.Service.hasMany(models.User);
    }
}
Service.init(db_js_1.default.sequelize);
exports.default = Service;
