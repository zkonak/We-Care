"use strict";
// import UserRouter from "./User/index.js";
// import PrescriptionRouter from "./Prescription/index.js";
// import ConsultationRouter from "./Consultation/index.js";
// import ServiceRouter from "./Service/index.js";
// import DrugRouter from "./Drug/index.js";
// import DrugPrescriptionRouter from "./DrugPrescription/index.js";
Object.defineProperty(exports, "__esModule", { value: true });
// const routes = {
//   "/user": UserRouter,
//   "/drug": DrugRouter,
//   "/drugprescription": DrugPrescriptionRouter,
//   "/prescription": PrescriptionRouter,
//   "/consultation": ConsultationRouter,
//   "/service": ServiceRouter
// };
// export default routes;
const Patient_1 = require("./Patient");
const Service_1 = require("./Service");
const Doctor_1 = require("./Doctor");
const Prescription_1 = require("./Prescription");
const Allergy_1 = require("./Allergy");
const Drug_1 = require("./Drug");
const routes = [
    Patient_1.patientController,
    Service_1.serviceController,
    Doctor_1.doctorController,
    Prescription_1.prescriptionController,
    Allergy_1.allergyController,
    Drug_1.drugController,
];
exports.default = routes;
