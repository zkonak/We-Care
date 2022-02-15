"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../User/service"));
class ConsultationDTO {
    Constructor({ id_patient, id_doctor, date }) {
        const patient = service_1.default.findById(id_patient);
        const doctor = service_1.default.findById(id_doctor);
    }
}
exports.default = ConsultationDTO;
